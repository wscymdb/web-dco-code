const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')
const path = require('path')
const glob = require('glob') // 扫描某路径下的所有文件夹或文件

const CompressionWebpackPlugin = require('compression-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
    // tree shaking CSS
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.resolve(__dirname, '../src')}/**/*`, {
        nodir: true, // 结果只要文件 不要文件夹
      }),
      safelist: () => ({
        standard: ['html'],
      }),
    }),
    // http压缩
    new CompressionWebpackPlugin({
      test: /\.(css|js)$/, // 匹配要压缩哪些文件
      // threshold: 500, // 设置文件从多大开始压缩
      minRatio: 0.7, // 至少的压缩比例
      algorithm: 'gzip', // 采用的压缩算法
    }),
  ],
  optimization: {
    // usedExports: true, // 使用tree shaking
    chunkIds: 'deterministic',
    runtimeChunk: 'single',
    minimize: true,
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
          mangle: false,
          keep_fnames: true,
          keep_classnames: true,
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
