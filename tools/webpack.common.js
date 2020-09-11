const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {    
    // specifies how many bundles
    entry: {
        index: "./src/scripts/index.js",        
    },    
    plugins: [
        new CleanWebpackPlugin()
    ],
    module: { // loaders
        rules: [            
            // resolves module imports of an html file
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            // resolves imports of an bit image/vector image files
            {
                test: /\.(svg|gif|png|jp?eg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "images"
                    }
                }
            }                        
        ]
    }    
}