let DB;
document.addEventListener('DOMContentLoaded',()=>{
    myDB();
    //insertamos datos despues de unos segundos
    setTimeout(() => {
        createClient();
    }, 5000);
})

function myDB(){
    //creamos la base de datos con un nombre y una versión
    let myDB=window.indexedDB.open('myDatabase',1);

    //capturamos si hay un error
    myDB.onerror = function (){
        console.log('Hubo un error');
    }

    myDB.onsuccess= function(){
        DB=myDB.result;
        console.log('Base de datos creada correctamente');
    }

    //Configuración de la base de datos
    myDB.onupgradeneeded = function(e){
        const db = e.target.result;

        const objectStore = db.createObjectStore('myDatabase',{
            keyPath: 'myDatabase',
            autoIncrement: true
        })

        objectStore.createIndex('name','name',{unique:false});
        objectStore.createIndex('phone','phone',{unique:true});
        objectStore.createIndex('email','email',{unique:true});

        console.log("Columnas de base de datos creadas");
        

    }

}
//indexedDB funciona con transacciones
function createClient(){
    let transaction = DB.transaction(['myDatabase'],'readwrite');

    transaction.oncomplete = function(){
        console.log('Transacción completada');
    }
    transaction.onerror = function(){
        console.log('Error en la transacción');
    }

    const objectStore= transaction.objectStore('myDatabase');

    const newClient = {
        phone:4569987878,
        name:'Martha',
        email: 'marthaVic@mail.com'
    }

    //insertamos el objeto en la base de datos
    const petition = objectStore.add(newClient);
    console.log(petition);
}