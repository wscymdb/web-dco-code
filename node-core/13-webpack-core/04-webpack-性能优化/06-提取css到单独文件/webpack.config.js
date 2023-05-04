const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
      {
        test: /.css$/,
        // 开发中我们是用style-loader  他的作用是将编写的样式放在header的style中，便于我们调试
        // use: ['style-loader', 'css-loader'],
        // 生产环境中我们使用MiniCssExtractPlugin.loader  这个插件将css单独提取到一个文件中了，然后这个插件的loader将这个文件以<link ref=...>的方式引入到index.html中
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
    // 对css的提取  记得在rules中使用MiniCssExtractPlugin.loader代替style-loader
    new MiniCssExtractPlugin({
      filename: 'css/[name]-css.css', // 提取的文件的名称
      chunkFilename: 'css/[name]-chunk.css', // 动态导入的文件是单独分包的，那么如果有动态导入的css文件也会单独分包，这个就是设置分包的名字
    }),
  ],
  // 优化配置
  optimization: {
    runtimeChunk: 'single',
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
    minimizer: [
      new TerserPlugin({
        extractComments: false, //打包的时候不提去注释文件
      }),
    ],
  },
}
