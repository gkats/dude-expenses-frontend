const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
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
      filename: 'bundle.[chunkhash].js'
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
        },
        API_HOST: JSON.stringify(process.env.API_HOST)
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
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.template.html'
      }),
      new SWPrecacheWebpackPlugin({
        cacheId: 'dude-expenses',
        filename: 'sw.js',
        minify: true,
        staticFileGlobs: [
          'index.html',
          'bundle*.js',
          'icons/*.png'
        ]
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
    output: {
      path: path.join(__dirname, 'public'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        API_HOST: JSON.stringify(process.env.API_HOST || 'http://www.dude-expenses.dev')
      }),
      new HtmlWebpackPlugin({
        template: './public/index.template.html',
        inject: 'body'
      }),
      new SWPrecacheWebpackPlugin({
        cacheId: 'dude-expenses',
        filename: 'sw.js',
        minify: true,
        staticFileGlobs: [
          'index.html',
          'bundle*.js',
          'icons/*.png'
        ]
      })
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