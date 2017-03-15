const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');

const baseConfig = function() {
  return {
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
    }
  }
};

const prodConfig = function(env) {
  return webpackMerge(baseConfig(), {
    stats: {
      warnings: false
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      })
    ]
  });
};

const devConfig = function(env) {
  return webpackMerge(baseConfig(), {
    devtool: 'eval',
    devServer: {
      contentBase: './public',
      hot: true,
      historyApiFallback: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
};

module.exports = function(env) {
  if (env === 'production') {
    return prodConfig();
  } else {
    return devConfig();
  }
};