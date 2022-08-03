//Closures acceder a una función o un valor desde fuera o de forma global

const getClient = ()=>{
    const name ='Martha';

    function showName(){
        console.log(name);
    }

    return showName;

}
const client= getClient();
client();
