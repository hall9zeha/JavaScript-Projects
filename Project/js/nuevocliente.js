import {connectDB,createNewClient} from './datasource/DB.js';
import {formNewClient} from './selectors.js';
import UI from './classes/UI.js';


(function(){


    const ui = new UI();
    
    document.addEventListener('DOMContentLoaded',()=>{
        connectDB();
        formNewClient.addEventListener('submit',validateClient);
    });
    

    function validateClient(e){
        e.preventDefault();
        
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const company = document.querySelector('#company').value;
     
       
        if(name === '' || email === '' || phone === '' || company === ''){
            ui.printAlert('Todos los campos son obligatorios','error');
            return;
        }
        const client = {
            name,
            email,
            phone,
            company
            
        }
        client.id=Date.now();
        createNewClient(client);
    }
})();
