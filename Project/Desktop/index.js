const {app, BrowserWindow} = require('electron');

let appWindow;

function createWindow(){
    appWindow = new BrowserWindow({
        //Podemos definir el tamaño de la ventana de la aplicación
        width: 1000,
        height:600,
        center:true,
        show:false,
        //le ponemos un ícono a la aplicación
        icon:'icon.png'
        //podriamos evitar que el usuario redimencione la pantalla con
        //resizable:false
        //También podemos limitar un mínimo redimensionable de altura y anchura
        //minWidth:600,
        //minHeight:700
    });

    //Cuando la aplicación es cerrada liberamos los recursos de memoria
    appWindow.on('closed', () =>{
        appWindow=null;
    });

    //Cargar html
    appWindow.loadFile('./index.html')

    //Cuando la app esté lista, mostrar la ventana
    appWindow.once('ready-to-show', ()=>{
        appWindow.show();
    })
}

app.on('ready',createWindow);