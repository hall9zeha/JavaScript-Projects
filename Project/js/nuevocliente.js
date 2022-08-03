import {showMessage, validate} from './funciones.js';
import {newClient} from './API.js';
(function(){

    const form  = document.querySelector('#formulario');
    form.addEventListener('submit',validateForm);

    function validateForm(e){
        e.preventDefault();

        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const company = document.querySelector('#company').value;

        const client = {
            name,
            email,
            phone,
            company
        }
        if(validate(client)){
            showMessage('todos los campos son obligatorios');
            console.log(validate(client))
            return;
        }
        newClient(client);
        console.log(validate(client))
    }
    

})();