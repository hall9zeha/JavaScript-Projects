const {app, BrowserWindow } = require('electron');
const path= require('path');
const isDev = require('electron-is-dev');

let appWindow;

function createWindow(){

    appWindow = new BrowserWindow({
        width:1000,
        height:600,
        center:true,
        resizable:true,
        minWidth:600,
        minHeight:400,
        show:false,
        icon:'icon.png'
    })
    appWindow.loadURL(
        isDev
            ? 'http://localhost:3000'
            :`file://${path.join(__dirname,"../build/index.html")}`

    );

    appWindow.once('ready-to-show',()=>{
        appWindow.show();
    })
}

app.on('ready',createWindow);

app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
})

app.on('activate',()=>{
    if(appWindow === null){
        createWindow();
    }
})