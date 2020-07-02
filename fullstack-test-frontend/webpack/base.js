const webpack = require('webpack');
const path = require('path');
const {
    logging = false,
    mode = 'production'
} = require('minimist')(process.argv.slice(2));

module.exports = {
    mode,
    context: path.join(__dirname, '..', 'src'),
    entry: './index.js',
    output: {
        publicPath: '/'
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
            'Component': path.join(__dirname, '..', 'src', 'components'),
            'Action': path.join(__dirname, '..', 'src', 'actions'),
            'Api': path.join(__dirname, '..', 'src', 'api')
        }
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            LOGGING: JSON.stringify(logging)
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        '@babel/preset-react',
                        '@babel/preset-env'
                    ],
                    plugins: [
                        '@babel/plugin-transform-runtime',
                        ['@babel/plugin-proposal-decorators', {decoratorsBeforeExport: true}]
                    ]
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    }
};
