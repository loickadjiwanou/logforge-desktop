const { contextBridge } = require('electron');

/**
 * Expose a minimal API to the renderer so the frontend can detect
 * it is running inside the Electron shell.
 */
contextBridge.exposeInMainWorld('electronAPI', {
  isElectron: true,
});
