import { app, BrowserWindow } from "electron";
import server from "./server.js";

server.listen(3000, () => {

    const createWindow = () => {
        const win = new BrowserWindow({
            width: 1280,
            height: 720
        });
    
        win.loadURL('http://localhost:3000');
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