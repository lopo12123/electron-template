/// <reference types="vite/client" />

declare global {
    interface Window {
        __ipc__: {
            invoke: (channel: string, ...arg: any[]) => Promise<any>
        }
    }
}

export {}