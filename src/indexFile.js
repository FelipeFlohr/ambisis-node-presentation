const { app, BrowserWindow } = require("electron");
const path = require("path");

const isDevEnv = process.env.NODE_ENV !== "production";

app.whenReady()
    .then(() => {
        app.allowRendererProcessReuse = false;

        // Creates the window
        const window = new BrowserWindow({
            width: 1280,
            height: 720,
            minWidth: 800,
            minHeight: 600,
            webPreferences: {
                allowRunningInsecureContent: true,
                contextIsolation: false,
                devTools: isDevEnv,
                enableRemoteModule: true,
                nodeIntegration: true,
            },
        });
        window.setMenuBarVisibility(isDevEnv);

        // Loads the index
        const fullPath = path.join(__dirname, "../build/index.html");
        window.loadFile(fullPath);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
