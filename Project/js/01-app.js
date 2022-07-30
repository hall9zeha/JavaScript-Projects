//Api de notificaciones
const notificationBtn= document.querySelector('#notificar');

notificationBtn.addEventListener('click',()=>{
    Notification
        .requestPermission()
        .then(result =>{
            console.log('El resultado es:', result);
        })
})

const showNotification = document.querySelector('#verNotificacion');
showNotification.addEventListener('click',() =>{
    if(Notification.permission === 'granted'){
        const notify = new Notification('Esta es tu nueva notificación',{
            icon: 'img/logo.png',//poner un ícono
            body: 'Barry aprendiendo JS'//poner un contenido
        });

        //Agregamos un evento al hacer click en la notificación
        notify.onclick = function(){
            window.open('https://play.google.com/store/apps/developer?id=Barry+Zea+H.')
        }
      }
})
