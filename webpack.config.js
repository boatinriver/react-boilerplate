const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './app/main.jsx'),
    output: {
        path: path.resolve(__dirname, './public/build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                include: path.resolve(__dirname, 'app'),
                exclude: /node_modules/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    "presets": ['es2015','react']
                }
            },
            { test: /\.css$/, include: path.resolve(__dirname, 'app'), loader: 'style-loader!css-loader' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
