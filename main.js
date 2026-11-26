const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function creerFenetre() {
  const win = new BrowserWindow({
    width: 1320,
    height: 840,
    minWidth: 900,
    minHeight: 600,
    backgroundColor: '#0A1128',
    title: 'DIASPAGRO – Suivi des récoltes',
    icon: path.join(__dirname, 'build', 'icon.png'),
    webPreferences: { contextIsolation: true, nodeIntegration: false }
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, 'renderer', 'index.html'));
}

app.whenReady().then(() => {
  creerFenetre();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) creerFenetre(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
