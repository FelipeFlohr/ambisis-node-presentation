const path = require("path");
const webpack = require("webpack");
const { Configuration } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const nodeExternals = require("webpack-node-externals")

const devMode = process.env.NODE_ENV === "development"

/**
 * Configuração do Webpack
 * @type Configuration
 */
const config = {
    mode: devMode ? "development" : "production",
    devtool: devMode ? "eval-cheap-source-map" : "source-map",
    target: "electron-renderer",
    entry: {
        "main.bundle": "./src/main.tsx",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",

            },
            {
                test: /\.css$/i,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build"),
    },
    optimization: {
        minimizer: [
            "...",
            new CssMinimizerPlugin(),
        ],
    },
    node: {
        global: false
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.bundle.css",
        }),
        new HtmlWebpackPlugin({
            title: "Apresentação Node",
            template: "./index.html",
            filename: "index.html",
            excludeChunks: [
                "content",
                "content.bundle",
                "content.bundle.js"
            ],
        }),
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
        new Dotenv(),
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map"
        })
    ],
    devServer: {
        port: 8080,
        hot: false,
        liveReload: true,
        open: false,
        historyApiFallback: true
    },
    performance: {
        maxEntrypointSize: 5120005,
        maxAssetSize: 5120005
    },
    devtool: false,
    externals: [
        nodeExternals()
    ],
    watch: true
};

module.exports = config;