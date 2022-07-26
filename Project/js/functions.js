import Dates from './classes/dates.js';
import UI from './classes/UI.js';
import {petInput,ownerInput,phoneInput,dateInput,hourInput,signInput,formDate} from './selectors.js';

let edition;
const dates= new Dates();
const ui=new UI();


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
export function infoDate(e){
    dateObj[e.target.name] = e.target.value;
    
}


export function newDate(e){
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
export function resetObject (){
    dateObj.pet='';
    dateObj.owner='';
    dateObj.phone='';
    dateObj.date='';
    dateObj.hour='';
    dateObj.sign='';
}
export function deleteDate(id){
    dates.deleteDate(id);
    ui.printAlert('La cita se eliminó correctamente');
    ui.printDates(dates);
}
export function fillDate(fillDate){
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