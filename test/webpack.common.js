const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",            
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            }
        ]
    },
    plugins: [new HTMLWebpackPlugin({
        template: "./src/index.html"
    })]
}