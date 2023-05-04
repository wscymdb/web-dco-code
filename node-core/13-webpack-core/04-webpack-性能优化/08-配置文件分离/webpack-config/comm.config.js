const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// webpack官方提供的 用来合并webpack配置项的工具
const { merge } = require('webpack-merge')

const devConfig = require('./dev.config')
const prodConfig = require('./prod.config')

// 让公共配置变成一个函数 这样可以拿到当前的环境 可以让某个rules根据环境来使用不同的loader
/** @type {import('webpack').Configuration} */

const getCommConfig = function (isProd) {
  return {
    // 入口的地址是根据上下文对象来的 默认情况下是根目录
    entry: './src/main.js',
    output: {
      //
      filename: 'js/[name]-bundle.js',
      // 出口地址必须是一个绝对路径
      path: path.resolve(__dirname, '../build'),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          // 开发使用style-loader 方便调试
          // 生产使用MiniCssExtractPlugin.loader
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../index.html'),
      }),
    ],
  }
}

// webpack运行配置文件导出一个函数
// 在命令行执行打包命令的时候可以跟上自定义打包文件名称
// 也可以跟上env 环境变量  添加的变量会作为导出函数的参数
// eg: webpack --config ./webpack-config/comm.config.js --env production

module.exports = function (env) {
  const isProduction = env.production
  const commConfig = getCommConfig(isProduction)
  const mergeConfig = isProduction ? prodConfig : devConfig
  return merge(commConfig, mergeConfig)
}
