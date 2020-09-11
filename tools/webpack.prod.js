const path = require("path");
const common = require("./webpack.common");
const { merge }  = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "production",    
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.[name].[contentHash].js"        
    },      
    // usually works in bundles
    plugins: [
        // saves css to output directory
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css"
        }), 
        // cleans the output folder before saving newly bundled files        
        new HtmlWebpackPlugin({
            template: "./src/index.html", 
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],
    // plugins for optimization
    optimization: {
        minimizer: [
            // minifies css
            new OptimizeCssAssetsWebpackPlugin(), // minified css
            // minifies js
            new TerserPlugin() // minified javascript
        ]
    },
    // loaders (works on individual files)
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    }
});