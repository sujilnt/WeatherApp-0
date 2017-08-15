'use strict';

var path = require('path');
module.exports = {
    entry: "./js/main.js",
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/,
            query: {
                parserOptions: {
                    "ecmaVersion": 6,
                    "sourceType": "module"
                },
                rules: {
                    "semi": 2
                }
            }
        }],
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'bundle'),
        inline: true,
        port: 4000
    }
};
//# sourceMappingURL=webpack.config.js.map