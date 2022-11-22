const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    entry: ['./src/index.js','./src/perfil.js'],
    output:{
        filename: 'index.js',
        path: path.resolve(__dirname,'dist'),
        clean: true
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"}),
        new MiniCssExtractPlugin({
            filename: "main.css"
        }),
        new CopyPlugin({
            patterns: [
              { from: "./src/img", to: "img" },
            ],
          }),
    ],
    devtool: "inline-source-map",
    mode: "development",
    devServer:{
        static: "./dist"
    }
}