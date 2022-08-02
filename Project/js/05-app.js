const url ='https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', getData);

//Con promises
// function getData(){
//     fetch(url)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(error => console.log(error))

    
// }

//Con async await
async function getData(){
    /**
     * En este caso primero debemos obtener la respuesta para despues convertirla en json
     * no podemos ejecutar las dos tareas al mismo tiempo, por eso es mejor usar dos await
     */
    try{
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    }
    catch(error){
        console.log(error);
    }
}