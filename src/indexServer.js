const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("../webpack.config");
const { app, BrowserWindow } = require("electron");

const compiler = Webpack(webpackConfig);
const devServerOptions = webpackConfig.devServer;
const server = new WebpackDevServer(devServerOptions, compiler);

server.startCallback(() => {
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
                    webSecurity: false
                },
            });
            window.setMenuBarVisibility(isDevEnv);

            // Loads the index
            window.loadURL("http://localhost:8080");
        })
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });
});
