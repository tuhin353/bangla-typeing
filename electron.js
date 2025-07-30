const { app, BrowserWindow } = require("electron")
const path = require("path")
const isDev = require("electron-is-dev")

function createWindow() {
  // ব্রাউজার উইন্ডো তৈরি করুন
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    icon: path.join(__dirname, "assets/icon.png"), // আইকন যোগ করুন
    title: "অভ্র টাইপিং শিক্ষক",
  })

  // অ্যাপ লোড করুন
  mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../out/index.html")}`)

  // ডেভেলপমেন্ট মোডে DevTools খুলুন
  if (isDev) {
    mainWindow.webContents.openDevTools()
  }
}

// এই মেথড কল হবে যখন Electron ইনিশিয়ালাইজেশন শেষ হবে
app.whenReady().then(createWindow)

// সব উইন্ডো বন্ধ হলে অ্যাপ বন্ধ করুন
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
