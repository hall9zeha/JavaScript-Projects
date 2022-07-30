//Api para sabr si tienes conexión a internet
window.addEventListener('online',updateState);
window.addEventListener('offline',updateState);

function updateState(){
    if (navigator.onLine) {
        console.log('Si tienes internet');
    }
    else{
        console.log('no tienes internet');
    }
}