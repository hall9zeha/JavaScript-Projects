//Api par amostrar la pantalla completa y normal

const fullScreenBtn = document.querySelector('#abrir-pantalla-completa');
const exitScreen =  document.querySelector('#salir-pantalla-completa');

fullScreenBtn.addEventListener('click',fullScreen);
exitScreen.addEventListener('click', closeFullScreen);

function fullScreen(){
    document.documentElement.requestFullscreen();

}
function closeFullScreen(){
    document.exitFullscreen();
}