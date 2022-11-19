'use strict';

// Modules
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

let basePath = path.join(__dirname, '/');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch';
var isProd = ENV === 'build';

module.exports = 
[
  {
    entry: {
      bootstrap_all: __dirname + '/src/bootstrap_all.js'
    },
    // entry: [
    //   './src/bootstrap_all.js'
    // ],
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    output: {
      // filename: '[name].[contenthash].js',
      filename: '[name].js',
      path: path.resolve(__dirname, '..', 'wwwroot', 'dist')
    },
    mode: 'development',
  },
  {
    entry: [
      /* Main site */
      __dirname + '/src/scss/common.scss',
      __dirname + '/src/scss/blogpost.scss',
      __dirname + '/src/scss/fonts.scss',
      __dirname + '/src/scss/simple-menu.scss',
    ],
    module: {
      rules: [
        {
          test: /\.(scss|sass)$/,
          exclude: /node_modules/,
          use: [
            // Outputs to files
            {
              loader: 'file-loader',
              options: { 
                outputPath: 'css/', 
                // name: '[name].[contenthash].min.css'
                name: '[name].min.css'
              }
            },
            // Converts SASS to CSS
            'sass-loader'
          ]
        }
      ]
    }
  },
  {
    entry: [
      __dirname + "/node_modules/bootstrap/dist/css/bootstrap.min.css"

    ],
    module: {
      rules: [ 
        {
          test: /\.(css)$/,
          use: [
            {
              loader: 'file-loader',
              options: { 
                outputPath: 'css/', 
                name: '[name].css'
              }
            },
          ]
        }
      ]
    }
  }
]