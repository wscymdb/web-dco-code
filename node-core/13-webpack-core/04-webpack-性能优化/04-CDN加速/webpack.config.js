const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  // 使用多入口
  entry: './src/index.js',
  devtool: false,
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, './build'),
    // 针对分包的文件命名
    // 这个name是可以更改的，在impot()的时候添加魔法注释即可
    chunkFilename: '[name]-chunk.js',
    clean: true,
    // 将全部的资源托管到CDN服务器上
    // publicPath: 'http://abc.cba.com',
    // 将三方包的资源托管到CDN服务器上
  },
  externals: {
    // key表示的意思：表示我们在自己项目中引入的三方包的名称
    // eg：import http from 'axios'  那么axios就是本地引入的名字

    // value:表示从CDN地址请求下来的js中提供对应的名称
    //eg：cdn上lodash的全局变量叫 _  jquery的全局变量叫 $
    axios: 'axios',
    lodash: '_',
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
  // 优化配置
  optimization: {
    // chunkIds: 'deterministic', // 设置id占位符的id 会根据mode模式自动设置
    splitChunks: {
      chunks: 'all',
      // // 当一个包大于指定的大小时继续拆包
      // maxSize: 20000,
      // // 拆的包最小不能小于minSize 但是如果一个包是一个整体的话它大于了maxSize 是拆不了的 如果这个包引用了其他依赖可以拆
      // minSize: 10000,
      cacheGroups: {
        vendors: {
          test: /[\//]node_modules[\//]/,
          filename: '[id]_vendors.js',
        },
        abc: {
          test: /abc/,
          filename: '[id]_abc.js',
        },
      },
    },
  },
}
