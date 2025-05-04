const {app, BrowserWindow} = require("electron");
const path = require("path")

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

    mainWindow.loadURL("https://example.com");
    // mainWindow.loadFile(path.join(__dirname, "dist", "index.html"));
});
