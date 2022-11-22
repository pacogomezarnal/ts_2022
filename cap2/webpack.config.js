const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/index.js','./src/perfil.js'],
    output:{
        filename: 'index.js',
        path: path.resolve(__dirname,'dist'),
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    })],
    devtool: "inline-source-map",
    mode: "development",
    devServer:{
        static: "./dist"
    }
}