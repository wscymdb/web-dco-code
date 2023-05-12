const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AutoUploadWebpackPlugin = require('./plugins/AutoUploadWebpackPlugin')

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new AutoUploadWebpackPlugin(),
  ],
}
