const electron = require("electron")
const app = electron.app // know app starts, quits, or becomes active.
const BrowserWindow = electron.BrowserWindow // create and control app windows
const path = require("path") // work with directories safely

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    const isDev = !app.isPackaged;
    if (isDev) {
        win.loadURL('http://localhost:5173');
    } else {
        win.loadFile(path.join(__dirname, 'dist', 'index.html'));
    }
}

app.whenReady().then(createWindow)

app.on("window-all-closed", () => {
    if (process.platform != 'darwin') app.quit()
})
