const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {    
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dev")
    },
    mode: "development",
    devtool: "none",    
});