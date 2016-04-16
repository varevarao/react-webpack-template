// const webpack = require('webpack');
const path = require('path');

const x = {
  context: path.resolve('./src'),
  debug: true,
  devtool: 'eval',
  devServer: {
    contentBase: './src/',
    publicPath: '/assets/',
    historyApiFallback: true
  },
  entry: './index.js',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2)$/,
        loaders: ['file']
      },
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve('src')
        ],
        loaders: ['babel']
      }
    ]
  },
  output: {
    path: path.resolve('./dist/assets'),
    filename: 'app.js',
    publicPath: './assets/'
  },
  plugins: [],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
      path.resolve('./src'),
      'node_modules'
    ]
  }
};

module.exports = (configName) => {

  x.configName = configName;
  return x;
};
