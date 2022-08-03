import {getClient,updateClient} from './API.js';
import {validate,showMessage} from './funciones.js';

(function(){
    const nameInput= document.querySelector('#nombre');
    const emailInput= document.querySelector('#email');
    const companyInput=document.querySelector('#empresa');
    const phoneInput = document.querySelector('#telefono');
    const idInput=document.querySelector('#id'); 


    document.addEventListener('DOMContentLoaded', async ()=>{
        const paramUrl = new URLSearchParams(window.location.search);

        const  idClient = parseInt(paramUrl.get('id'));
        const client = await getClient(idClient);
        showClient(client);
    })

    const form = document.querySelector('#formulario');
    form.addEventListener('submit',validateClient)


function showClient(client){
    const { name,email,phone,company,id} = client; 
    nameInput.value=name;
    emailInput.value=email;
    phoneInput.value=phone;
    companyInput.value=company;
    idInput.value=id;
}

function validateClient(e){
    e.preventDefault();

    const client={
        name:nameInput.value,
        email:emailInput.value,
        phone:phoneInput.value,
        company:companyInput.value,
        id:parseInt(idInput.value)
    }

    if(validate(client)){
        showMessage('Todos los campos son obligatorios');
        return;
    }
    updateClient(client);
}

})();