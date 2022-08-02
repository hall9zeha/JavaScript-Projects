/**
 * Usar dos promesas con un solo async await, ejecutandose al mismo tiempo, y así ganamos
 * en performance sin tener que poner un await a cada promesa 
 * 
 */

function downloadNewClient(){
    return new Promise((resolve)=>{

        console.log('Descargando lista de clientes...')
        setTimeout(() => {
            resolve('Lista de cliente descargada');
        }, 3000);
    })
}

function downloadOrdersList(){
    return new Promise((resolve)=>{
        console.log('Descargando lista de ordenes');
        setTimeout(() => {
            resolve('Lista de ordenes descargada');
        }, 3000);

    })
}

async function execute(){
    try {
        const response= await Promise.all([downloadNewClient(),downloadOrdersList()]);
        console.log(response);
    } catch (error) {
        console.log('Error al descargar datos')
    }
}
execute();

