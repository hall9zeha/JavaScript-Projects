import {fillDate, deleteDate } from '../functions.js';
import {containerDate} from '../selectors.js';

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

export default UI;