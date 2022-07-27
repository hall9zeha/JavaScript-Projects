import UI from './classes/UI.js';
import {connectDB, getClientById} from './datasource/DB.js';
import {formNewClient} from './selectors.js';

(function(){
    const ui= new UI();
    let idClient;
    document.addEventListener('DOMContentLoaded', ()=>{
        connectDB();

        formNewClient.addEventListener('submit',updateClient);
        //traemos el id del cliente enviado como parámetro al hacer clieck en el enlace editar del index
        const paramUrl = new URLSearchParams(window.location.search);
        idClient = paramUrl.get('id');

        if(idClient){
            setTimeout(() => {
                getClientById(idClient);
            }, 1000);
            
        }
        console.log(idClient)
    });
    function updateClient(e){
        ui.updateClient(e,idClient);
    }

})();