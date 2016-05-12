/**
 * React Native Webpack Starter Kit
 * https://github.com/jhabdas/react-native-webpack-starter-kit
 */
'use strict'

var path = require('path');
var join = path.join.bind(path, __dirname);
var joinNM = path.join.bind(path, __dirname, 'node_modules');
var webpack = require('webpack');

module.exports = {
    debug: true,
    devtool: 'source-map',
    entry: {
        'index.ios': [join('./public/main.ios.js')],
        'index.android': [join('./public/main.android.js')],
    },
    resolve: {
        extensions: ['', '.jsx', '.ios.js', '.android.js', '.js'],
        alias: {
            'subschema': joinNM('subschema/src/')
        }
    },
    output: {
        path: join('build'),
        filename: '[name].js',
    },
    module: {

        loaders: [
            {
                test: /\.(less|css)$/,
                loader: 'null'
            },
            {
                test: /\.jsx?$/,
                include: [
                    /node_modules\/react-native/,
                    /node_modules\/subschema.*\/src/,
                ],
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.(jsx?|es6)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.json$/,
                loader: "json"
            }
        ]
    }
};

