const {app, BrowserWindow} = require("electron");
const path = require('path');

//Create Window
function Window(){
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            //allow to use node js
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    //load html file
    win.loadFile('src/renderers/index.html');

    //open dev tools
    win.webContents.openDevTools();
}

//create the window
app.whenReady().then(() => {
    Window();
    
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0){
            Window();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit();
    } 
});