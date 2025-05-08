import {app, BrowserWindow, ipcMain, dialog} from "electron"
import {readFileSync} from "node:fs"
import {join} from "node:path"

const preloadScript = join(import.meta.dirname, 'preload.js')

/**
 * @type {BrowserWindow}
 */
let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            webSecurity: true,
            nodeIntegration: true,
            contextIsolation: true,
            preload: preloadScript,
        },
    });

    mainWindow.webContents.openDevTools();

    // TODO: 服务的静态文件提供的地址
    mainWindow.loadURL("http://localhost:5173/");
});


ipcMain.handle('select-image', async () => {
    const r = await dialog.showOpenDialog({})
    if (r.canceled) return null

    const filePath = r.filePaths[0]
    if (!filePath) return null

    const base64 = readFileSync(filePath, 'base64')

    return {
        filePath,
        base64,
    }
})
