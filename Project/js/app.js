//Formulario
const petInput=document.querySelector('#mascota');
const ownerInput=document.querySelector('#propietario');
const phoneInput=document.querySelector('#telefono');
const dateInput=document.querySelector('#fecha');
const hourInput=document.querySelector('#hora');
const signInput=document.querySelector('#sintomas');

//UI
const formDate= document.querySelector('#nueva-cita');
const containerDate= document.querySelector('#citas');

let edition;


//Clases 
class Dates{
    constructor(){
        this.arrayDates=[];
    }
    addNewDate(dates){
        this.arrayDates=[...this.arrayDates, dates];
    }
    deleteDate(id){
        this.arrayDates=this.arrayDates.filter(date => date.id !==id);

    }
    editDate(dateObj){
        console.log(dateObj);
        this.arrayDates = this.arrayDates.map(date => date.id === dateObj.id ? dateObj : date);
    }
}

class UI{
    printAlert(message, type){
        const divAlert=document.createElement('div');
        divAlert.classList.add('text-center','alert','d-block','col-12');

        if(type==='error'){
            divAlert.classList.add('alert-danger');
        }
        else{
            divAlert.classList.add('alert-success');
        }
        divAlert.textContent=message;
        //primero insertamos el elemento y luego la referencia del objeto para poner el nuevo div before
        document.querySelector('#contenido').insertBefore(divAlert,document.querySelector('.agregar-cita'));
        setTimeout(() => {
            divAlert.remove()
        }, 2000);
    }
//ya que le estamos pasando el objeto completo haremos destructuring desde el parámetro 'dates'
//para acceder al arreglo de arrayDates
    printDates({arrayDates}){
        this.clearHtml();
        arrayDates.forEach(dateObj=>{
            const {pet, owner, phone,date,hour,sign,id}=dateObj;
            const divDate =document.createElement('div');
            divDate.classList.add('cita','p-3');
            divDate.dataset.id=id;

            const petParagraph =document.createElement('h2');
            petParagraph.classList.add('card-title', 'font-weight-bolder');
            petParagraph.textContent=pet;

            const ownerParagraph=document.createElement('p');
            ownerParagraph.innerHTML =`
                <span class="font-weight-bolder">Propietario: </span> ${owner}
            `;

            const phoneParagraph=document.createElement('p');
            phoneParagraph.innerHTML =`
                <span class="font-weight-bolder">Teléfono: </span> ${phone}
            `;
            
            const dateParagraph=document.createElement('p');
            dateParagraph.innerHTML =`
                <span class="font-weight-bolder">Fecha: </span> ${date}
            `;

            const hourParagraph=document.createElement('p');
            hourParagraph.innerHTML =`
                <span class="font-weight-bolder">Hora: </span> ${hour}
            `;

            const signParagraph=document.createElement('p');
            signParagraph.innerHTML =`
                <span class="font-weight-bolder">Síntomas: </span> ${sign}
            `;

            const btnDelete = document.createElement('button');
            btnDelete.classList.add('btn','btn-danger','mr-2');
            btnDelete.innerHTML = 'Eliminar <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'

            const btnEdit = document.createElement('button');
            btnEdit.classList.add('btn', 'btn-info');
            btnEdit.innerHTML = 'Editar <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>'

            btnDelete.onclick = () => deleteDate(id);
            btnEdit.onclick = () => fillDate(dateObj);

            divDate.appendChild(petParagraph);
            divDate.appendChild(ownerParagraph);
            divDate.appendChild(phoneParagraph);
            divDate.appendChild(dateParagraph);
            divDate.appendChild(hourParagraph);
            divDate.appendChild(signParagraph);
            divDate.appendChild(btnDelete);
            divDate.appendChild(btnEdit);

            containerDate.appendChild(divDate);
            

        })
    }
    clearHtml(){
        while(containerDate.firstChild){
            containerDate.removeChild(containerDate.firstChild);
        }
    }
}

const dates= new Dates();
const ui=new UI();


eventListeners();
function eventListeners(){
    petInput.addEventListener('change',infoDate);
    ownerInput.addEventListener('change',infoDate);
    phoneInput.addEventListener('change',infoDate);
    dateInput.addEventListener('change',infoDate);
    hourInput.addEventListener('change',infoDate);
    signInput.addEventListener('change',infoDate);

    formDate.addEventListener('submit',newDate);

}

const dateObj={
    pet:'',
    owner:'',
    phone:'',
    date:'',
    hour:'',
    sign:''
}
/**
 * Asignaremos cada argumento escrito en los elementos del html a las propiedades correspondientes en 
 * dateObj para ello usaremos el identificador 'name' del objeto html el cual debe ser igual
 * a la propiedad de 'dateObj' en el cual queremos guardar los datos
 * */
function infoDate(e){
    dateObj[e.target.name] = e.target.value;
    
}

function newDate(e){
    e.preventDefault();
    const {pet, owner, phone,date,hour,sign}=dateObj;
    if(pet==='' || owner===''|| phone===''||date===''|| hour==='' || sign===''){
        ui.printAlert('Todos los campos son obligatorios', 'error')
        return;
    }

    if(edition){
        ui.printAlert('Se modificó correctamente')
        dates.editDate({...dateObj});
        formDate.querySelector('button[type="submit"]').textContent ="Crear cita";
        edition=false;
    }
    else{
        dateObj.id=Date.now();
        //LE PASAMOS UNA COPIA DEL OBJETO y no una referencia ya que se estaba sobreescribiendo 
        //el último objeto creado sobre toso los demás
        dates.addNewDate({...dateObj});
        ui.printAlert('Se agregó correctamente');
    }
   
    resetObject();
    formDate.reset();
    

    ui.printDates(dates);
}
function resetObject (){
    dateObj.pet='';
    dateObj.owner='';
    dateObj.phone='';
    dateObj.date='';
    dateObj.hour='';
    dateObj.sign='';
}
function deleteDate(id){
    dates.deleteDate(id);
    ui.printAlert('La cita se eliminó correctamente');
    ui.printDates(dates);
}
function fillDate(fillDate){
    const {pet, owner, phone,date,hour,sign, id}=fillDate;

    petInput.value=pet;
    ownerInput.value=owner;
    phoneInput.value=phone;
    dateInput.value=date;
    hourInput.value=hour;
    signInput.value=sign;
    
    //CARGANDO EL OBJETO PARA MODIFICAR LOS DATOS EN MODO EDICIÓN

    dateObj.pet= pet;
    dateObj.owner=owner;
    dateObj.phone=phone;
    dateObj.date=date;
    dateObj.hour=hour;
    dateObj.sign=sign;
    dateObj.id=id;

    formDate.querySelector('button[type="submit"]').textContent ="Guardar cambios";
    edition=true;
    console.log(dateObj);
}