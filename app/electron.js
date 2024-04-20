// import { updateElectronApp } from ('update-electron-app');
// updateElectronApp();

import { app, BrowserWindow } from "electron";
import createHttpServer from "./server.js";
import path from "path";

let port = 3000;
let folder = "dist";

if (app.isPackaged) {
    port = 43501;
    folder = path.resolve(process.resourcesPath, "app.asar/dist");
}

createHttpServer(folder).listen(port, () => {

    const createWindow = () => {
        const win = new BrowserWindow({
            autoHideMenuBar: true,
            icon: 'icons/icon.ico'
        });
    
        win.loadURL(`http://localhost:${port}`);
        win.maximize();
    }
    
    app.whenReady().then(() => {
        createWindow();
    
        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) createWindow();
        });
    });
    
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
    });

});