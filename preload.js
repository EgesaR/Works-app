//System Imports
const os = require('os');
const path = require('path');
const { contextBridge, ipcRenderer } = require('electron');

//Resource Imports
const Toastify = require('toastify-js');

//Component Imports
const Layout = require('./renderer/js/layout')
const App = require('./renderer/js/App')
const DocumentEditor = require("./renderer/js/Components/DocumentEditor")
const SpreadsheetEditor = require("./renderer/js/Components/SpreadsheetEditor")
const CreateFileContainer = require("./renderer/js/Components/CreateFileContainer")
const HomeScreen = require("./renderer/js/Components/HomeScreen")


//Function Bridges to Other files
contextBridge.exposeInMainWorld('os', {
  homedir: () => os.homedir(),
});


contextBridge.exposeInMainWorld('path', {
  join: (...args) => path.join(...args),
});

contextBridge.exposeInMainWorld('ipcRenderer', {
  send: (channel, data) => ipcRenderer.send(channel, data),
  on: (channel, func) =>
    ipcRenderer.on(channel, (event, ...args) => func(...args)),
});

contextBridge.exposeInMainWorld('Toastify', {
  toast: (options) => Toastify(options).showToast(),
});

contextBridge.exposeInMainWorld('Layout', {
  layout: ({content}) => Layout({content}),
});

contextBridge.exposeInMainWorld('App', {
  layout: App(),
});

contextBridge.exposeInMainWorld('HomeScreen', {
  layout:HomeScreen(),
});

contextBridge.exposeInMainWorld('CreateFileContainer', {
  layout: (icon, iconColor, extension, inputColor) => CreateFileContainer(icon, iconColor, extension, inputColor),
});

contextBridge.exposeInMainWorld('DocumentEditor', {
  layout: DocumentEditor(),
});

contextBridge.exposeInMainWorld('SpreadsheetEditor', {
  layout: SpreadsheetEditor(),
});