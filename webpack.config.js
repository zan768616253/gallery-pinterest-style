const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
//const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const entry_jsx = path.resolve(__dirname, './app/index.jsx');
const entry_less = path.resolve(__dirname, './less/index.less');
const output_path = path.resolve(__dirname,'./build');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:3000',
        entry_jsx,
        entry_less
    ],
    output: {
        publicPath: output_path,
        path: output_path,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: output_path,
        hot: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
            {test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/, query: {presets: ['react', 'es2015']}},
            {test: /\.less$/, loaders: ['style', 'css', 'less'], include: path.resolve(__dirname, 'less')},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('bundle.css')
    ]
}