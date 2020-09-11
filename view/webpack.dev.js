const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js"
    },
    output: {        
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contentHash].[bundle].js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist")
    },
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: [
                    {
                        loader: "babel-loader",  
                        options: {
                            sourceMap: true
                        }                     
                    }
                ]
            }
        ]
    }
}