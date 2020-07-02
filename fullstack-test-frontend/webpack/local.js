const path = require('path');
const html = require('html-webpack-plugin');
const merge = require('webpack-merge');
const base = require('./base');
const {
    port = 8080,
    backend = 'http://localhost:8081',
} = require('minimist')(process.argv.slice(2));

module.exports = merge(base, {
    devtool: 'eval-source-map',
    plugins: [
        new html({
            template: './local.html',
        })
    ],
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: true,
        contentBase: false,
        compress: true,
        host: '0.0.0.0',
        port: port,
        overlay: {
            warnings: false,
            errors: true,
        },
        publicPath: '/',
        proxy: {
            '/api/': {
                target: backend,
                secure: false,
                changeOrigin: true,
            },
        },
        watchOptions: {
            poll: false,
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        }
    }
});
