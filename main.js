console.log("hello world")

/*const electron = require("electron")
const app = electron.app // know app starts, quits, or becomes active.
const BrowserWindow = electron.BrowserWindow // create and control app windows
const path = require("path") // work with directories safely
const url = require("url") // module for parsing, formatting, and resolving URLs

let win

function createWindow() {
    win = new BrowserWindow()
    win.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file",
        slashes: true
    }))
}*/

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
    win.loadFile(path.join(__dirname, 'index.html'))
}

app.whenReady().then(createWindow)

app.on("window-all-closed", () => {
    if (process.platform != 'darwin') app.quit()
})
