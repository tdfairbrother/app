var webpack = require('webpack');

module.exports = {

    development: {
        entry: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/dev-server',
            './src/index'
        ],
        output: {
            path: __dirname,
            filename: 'bundle.js',
            publicPath: '/scripts/'
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ],
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        module: {
            loaders: [
                { test: /\.jsx|.js$/, loaders: ['react-hot', 'jsx'] }
            ]
        },
        externals: {
            'React': 'window.React'
        }
    },

    production: {
        entry: [
            './src/index'
        ],
        output: {
            path: __dirname,
            filename: 'index.js',
            publicPath: '/lib/'
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        module: {
            loaders: [
                { test: /\.jsx|.js$/, loaders: ['jsx'] }
            ]
        },
        externals: {
            'React': 'window.React'
        }
    }
};