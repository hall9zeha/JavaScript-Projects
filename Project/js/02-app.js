//Hoisting, primero se registra un función y luego se manda a llamar

//declaration function, podemos llamar a la función antes como después

getClient('Martha')
function getClient(firstName){
    console.log(`El nombre del cliente es ${firstName}`);
}

//función como expresión, solo podemos llamarla después de inicializar la variable con la función

const nameClient= function getClient_1(firstName) {console.log(`el nombre del cliente_1 es ${firstName}`)}
nameClient('Barry');