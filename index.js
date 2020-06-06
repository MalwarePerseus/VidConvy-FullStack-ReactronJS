const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', ()=>{
	mainWindow = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true,
			backgroundThrottling: false,
		}
	});
	mainWindow.loadFile('./src/index.html')
});

