// https://scotch.io/tutorials/setting-up-webpack-for-any-project

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

require('dotenv').config();

const ENV = process.env.NODE_ENV;
const isTest = ENV === 'testing';
const isProd = ENV === 'production';

function setDevTool() {
  if (isTest) return 'inline-source-map';
  if (isProd) return 'source-map';
  return 'eval-source-map';
}

const config = {
  entry: ['@babel/polyfill', './src/client/index.jsx'],
  output: {
    filename: 'index.js',
    path: `${__dirname}/dist`,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules|src\/api/,
        use: 'babel-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, '/src/client/public'),
    historyApiFallback: true,
    port: process.env.CLIENT_PORT || 5000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  devtool: setDevTool(),
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;
