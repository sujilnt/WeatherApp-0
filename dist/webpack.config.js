"use strict";

var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: "./js/mainApp.js",
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
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
            exclude: /node_modules/
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: ['file-loader?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false']
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        inline: true,
        watch: true,
        port: 4000
    },
    plugins: [new ExtractTextPlugin("bundle.css")]
};
//# sourceMappingURL=webpack.config.js.map