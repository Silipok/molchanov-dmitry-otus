const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['ts','tsx','.js','.jsx','.mjs','.json']
    },
    entry: path.resolve(__dirname,'./src/index.tsx'),
    output: {
        filename: 'index.js',
        path: path.join(__dirname,'/dist'),
    },
    devtool: 'inline-source-map',
    devServer:{
        host: '127.0.0.1',
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.j|tsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }
        )
    ]
};