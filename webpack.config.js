const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',// 模式,不设置时,默认production,打包后的代码会被压缩,development模式不会压缩;不设置mode,打包时,会报警告
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.ejs',
            inject: true,
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.png$/,
                use:{
                    loader: 'file-loader',
                    //loader: 'url-loader',
                }
            }
        ]
    }
};