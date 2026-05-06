import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export interface ElectronAPI {
    send: (channel: string, data?: unknown) => void;
    on: (channel: string, callback: (...args: unknown[]) => void) => void;
    invoke: (channel: string, data?: unknown) => Promise<unknown> | undefined;
}

const validSendChannels: string[] = ['task:create', 'task:update', 'task:delete'];
const validReceiveChannels: string[] = ['task:created', 'task:updated', 'task:deleted'];
const validInvokeChannels: string[] = ['task:getAll', 'app:getVersion'];

contextBridge.exposeInMainWorld('electronAPI', {
    send: (channel: string, data?: unknown): void => {
        if (validSendChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },
    on: (channel: string, callback: (...args: unknown[]) => void): void => {
        if (validReceiveChannels.includes(channel)) {
            ipcRenderer.on(channel, (_event: IpcRendererEvent, ...args: unknown[]) => callback(...args));
        }
    },
    invoke: (channel: string, data?: unknown): Promise<unknown> | undefined => {
        if (validInvokeChannels.includes(channel)) {
            return ipcRenderer.invoke(channel, data);
        }
        return undefined;
    },
} satisfies ElectronAPI);
