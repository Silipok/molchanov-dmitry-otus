const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer:{
        contentBase: path.join(__dirname,'/dist'),
        compress: true,
        historyApiFallback: true,
        host: '127.0.0.1',
        port: 8080,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
               test: /\.(png|svg|jpg|gif)$/,
               use: [
                   'file-loader'
               ],
            },
            {
                test: /\.j|tsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ],
    },
};