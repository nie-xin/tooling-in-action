module.exports = {
  entry: './src/app.js',

  output: {
    path: __dirname + 'build',
    filename: 'bundle.js',
    publicPath: '/build/',
  },

  watch: true,
};
