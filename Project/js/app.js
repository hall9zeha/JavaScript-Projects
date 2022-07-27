import {createDB,connectDB,getClients,deleteClient} from './datasource/DB.js'
import {clientList} from './selectors.js';
//
(function(){
    document.addEventListener('DOMContentLoaded',()=>{
        createDB();
        if(connectDB()){
            getClients();
        }
        clientList.addEventListener('click',deleteClient);
    })
})();
