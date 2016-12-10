/**
 * Created by pomy on 10/12/2016.
 */

'use strict';

let path = require('path');
let webpack = require("webpack");
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let extensions = ['','.js','.jsx'];

module.exports =  {
    entry: [path.resolve(__dirname, './src/index.js')],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './assets/'),
        publicPath: '/assets'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            //react-hot for HMR
            loaders: ['react-hot','babel']
            //loader:'babel'
        },{
            test: /\.css$/,
            //loader: 'style!css'
            //loaders: ['style', 'css']
            loader:ExtractTextPlugin.extract('style','css?sourceMap')
        }, {
            test: /\.less$/,
            //loader: 'style!css!less'
            loader:ExtractTextPlugin.extract('style','css!less?sourceMap')
        }]
    },

    resolve: {
        extensions: extensions
    },

    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.DedupePlugin()
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ]
};