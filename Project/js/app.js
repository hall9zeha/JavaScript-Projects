//Verificamos si el navegador soporta serviceWorkers

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js') 
    
    .then(registered => console.log('Se instaló correctamente',registered))
    .catch(error => console.log(error));
}
else{
    console.log('Service worker no soportoda');
}