const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var PACKAGE = require("./package.json");

module.exports = {
    mode: "development", //production
    entry: {
        main: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: `${PACKAGE.name}.bundle.js`,
        clean: true,
    },
    devtool: "inline-source-map",
    devServer: {
        static: path.resolve(__dirname, "dist"),
        port: 5001, //default 8080
        open: true,
        hot: true,
    },
    //loaders
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    //plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: "Demo Player",
            filename: "index.html",
            template: path.resolve(__dirname, "src/template.html"),
        }),
    ],
};
