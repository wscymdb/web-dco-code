const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  devtool: false,
  output: {
    filename: 'boundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    static: ['public', 'content'],
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://124.221.241.135:8888/',
        pathRewrite: {
          '^/api': '',
        },
      },
      changeOrigin: true,
    },
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      favicon: path.resolve(__dirname, 'public/favicon.ico'),
    }),
  ],
}
