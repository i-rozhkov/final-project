const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ],

  resolve: {
    modules: ['node_modules'],
    extensions: ['*', '.js']
  },

  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['*-loader', '*'],
    extensions: ['*', '.js']
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }]
  }
};