const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['ts','tsx','.js','.jsx','.mjs','.json']
    },
    entry: path.resolve(__dirname, 'src'),
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
    plugins: [
        new HtmlWebpackPlugin()
    ]
};