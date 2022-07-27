import UI from "../classes/UI.js";

let DB;

export function createDB(){
        const createDB = window.indexedDB.open('crm',1);
        createDB.onerror= function(){
            console.log('Ha ocurrido un error');
        }

        createDB.onsuccess = function(){
            console.log('base de datos creada correctamente');
        }
        createDB.onupgradeneeded = function(e){
            const db = e.target.result;
            const objectStore = db.createObjectStore('crm',{keyPath:'id',autoIncrement:true});

            objectStore.createIndex('name', 'name',{unique:false});
            objectStore.createIndex('email', 'email',{unique:true});
            objectStore.createIndex('phone', 'phone',{unique:false});
            objectStore.createIndex('company', 'company',{unique:false});
            objectStore.createIndex('id', 'id',{unique:true});

            console.log('database creada correctamente')
        }
    }
export function connectDB(){
    
    const openCn = window.indexedDB.open('crm',1);

    openCn.onerror = function(){
        console.log('hubo un error al conectar con la base de datos');

    }
    openCn.onsuccess = function(){
        DB = openCn.result;
        console.log('conexion exitosa');
       
        
    }
   
    return openCn;
}
export function getClients(){
    const ui = new UI();
    const openCn = window.indexedDB.open('crm',1);

    openCn.onerror = function(){
        console.log('hubo un error al conectar con la base de datos');

    }
    openCn.onsuccess = function(){
        DB = openCn.result;
       const objectStore = DB.transaction('crm').objectStore('crm');
       objectStore.openCursor().onsuccess = function(e){
           const cursor = e.target.result;
           if(cursor){
           
            ui.fillClients(cursor.value);
            cursor.continue();
           }
           else{
               console.log('no hay resultados');
           }
       }
       
        
    }
}
export function getClientById(idClient){
    const ui = new UI();
        const transaction  = DB.transaction(['crm'],'readwrite');
        const objectStore = transaction.objectStore('crm');
        
        const client = objectStore.openCursor();
        client.onsuccess = function(e){
            const cursor = e.target.result;
            if(cursor){
                if(cursor.value.id === Number(idClient)){
                    ui.fillClientDetail(cursor.value);
                }
                cursor.continue();
            }
        }
}
export function updateClient(clientUpdated){
    const ui = new UI();
    const transaction = DB.transaction(['crm'],'readwrite');
    const objectStore = transaction.objectStore('crm');

    objectStore.put(clientUpdated);

    transaction.oncomplete = function(){
        ui.printAlert('Cliente modificado');
       
        setTimeout(() => {
            window.location.href ='index.html'
        }, 2000);
    }
    transaction.onerror = function(){
        ui.printAlert('Hay un error en no se pudo editar');
    }
}
export function createNewClient(client){
    const ui = new UI();

    const transaction = DB.transaction(['crm'],'readwrite');
    const objectStore = transaction.objectStore('crm');
    objectStore.add(client);

    transaction.onerror = function(){
        console.log('Error al agregar cliente')
    }

    transaction.oncomplete = function(){
        console.log('Cliente agregado');
        ui.printAlert('Nuevo cliente agregado');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);
    }
}

export function deleteClient(e){
    if(e.target.classList.contains('eliminar')){
        const idDelete = Number(e.target.dataset.cliente);
        console.log(idDelete);

        const conf = confirm('Quieres eliminar el registro?');
        if (conf){
            const transaction = DB.transaction(['crm'],'readwrite');
            const objectStore = transaction.objectStore('crm');

            objectStore.delete(idDelete);
            transaction.oncomplete = function(){
                e.target.parentElement.parentElement.remove();
            }
            transaction.onerror=function(){

            }
        }
    }
}
