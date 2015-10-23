var webpack = require('webpack');

module.exports = {
  entry: './src',
  output: {
    path: 'builds',
    filename: 'bundle.js',
    publicPath: 'builds/',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '/src',
      },
      {
        test: /\.scss/,
        loader: 'style!css!sass',
      },
      {
        test: /\.html/,
        loader: 'html',
      }
    ],
  }
};
