var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: path.join(__dirname, 'src', 'index.jsx'),
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};