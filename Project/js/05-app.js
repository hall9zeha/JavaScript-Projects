//Detectar si la página web es visible o se ha cambiado de pestaña
document.addEventListener('visibilitychange',()=>{
    if(document.visibilityState === 'visible'){
        console.log('La página es visible ');

    }
    else{
        console.log('no estabas en la página cambiaste de pestaña');
    }
})