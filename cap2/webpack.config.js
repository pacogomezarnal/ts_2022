const path = require("path");

module.exports = {
    entry: './src/index.js',
    output:{
        filename: 'index.js',
        path: path.resolve(__dirname,'dist'),
    },
    devtool: "inline-source-map",
    mode: "development",
    devServer:{
        static: "./dist"
    }
}