module.exports = {
  entry: './src',
  devtool: 'source-map',

  output: {
    path: 'build',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.html/,
        loader: 'html',
      },
    ],
  },

  watch: true,
};
