var ExtractPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var config = {
  entry: './src',
  devtool: 'source-map',

  output: {
    path: 'builds',
    filename: 'bundle.js',
  },

  plugins: [
    new ExtractPlugin('bundle.css'),
  ],

  module: {
    loaders: [
      // the url-loader uses DataUrls.
      // the file-loader emits files.
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.scss/, loader: 'style!css'},
      {test: /\.html/, loader: 'html'},
    ]
  },
};

module.exports = config;
