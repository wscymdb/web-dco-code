const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  // 使用多入口
  entry: './src/index.js',
  devtool: false,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    // 针对分包的文件命名
    // 这个name是可以更改的，在impot()的时候添加魔法注释即可
    chunkFilename: '[name]-chunk.js',
    clean: true,
  },
  module: {
    rules: [
      {
        exclude: '/node_modules',
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
    open: true,
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
    }),
  ],
}
