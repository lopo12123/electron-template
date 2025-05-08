import {app, BrowserWindow, ipcMain, dialog} from "electron"

/**
 * @type {BrowserWindow}
 */
let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    mainWindow.webContents.openDevTools();
    mainWindow.loadURL("http://localhost:5173/");
    // mainWindow.loadFile(path.join(__dirname, "dist", "index.html"));
});


// ipcMain.handle('xxx', async (ev) => {
//     const r = await dialog.showOpenDialog({})
//
//     const buffer = fs.readFileSync(r.filePaths[0])
//     console.log(buffer)
// })
