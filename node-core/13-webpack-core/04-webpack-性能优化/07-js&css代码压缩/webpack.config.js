const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/main.js',
  output: {
    //
    filename: 'js/[name]-bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
  optimization: {
    chunkIds: 'deterministic',
    runtimeChunk: 'single',
    minimize: false,
    // minimizer存放压缩代码的插件 可以是js压缩的插件，也可使压缩css的插件
    minimizer: [
      // 压缩js的插件
      new TerserPlugin({
        extractComments: false, // 不单独提取注释
        // 默认情况下webpack已经对terser进行了配置
        // 如果想要更改配置可以在terserOptions对象中自定义配置
        terserOptions: {
          // 压缩代码配置
          compress: {
            arguments: true,
          },
          // 丑化代码配置
          // 不能为对象，值为boolean
          // 在terserOptions对象中写mangle的配置即可
          mangle: true,
          keep_fnames: true,
        },
      }),
      // 压缩css
      new CssMinimizerWebpackPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\//]node_modules[\//]/,
          filename: 'js/[id]-vendors.js',
        },
      },
    },
  },
}
