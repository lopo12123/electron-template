const {contextBridge, ipcRenderer} = require("electron");

contextBridge.exposeInMainWorld('__ipc__', {
    __debug__: 'DEBUG_FLAG',
    invoke: ipcRenderer.invoke,
})

