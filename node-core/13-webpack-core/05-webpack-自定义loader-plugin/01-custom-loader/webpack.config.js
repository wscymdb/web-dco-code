const path = require('path')
const HtmlWebapckPlugin = require('html-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    clean: true,
  },
  resolveLoader: {
    modules: ['node_modules', './ym-loaders'],
    // alias的优先级高于modules
    alias: {
      '01-loaders01.js': './my-loaders/01-loaders01.js',
    },
  },

  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: ['01-loaders01.js', '02-loaders02.js'],
      // },
      // {
      //   test: /\.js$/,
      //   use: path.resolve(__dirname, './ym-loaders/01-loaders01.js'),
      // },
      // {
      //   test: /\.js$/,
      //   use: 'loader1',
      //   // enforce: 'pre',
      // },
      // {
      //   test: /\.js$/,
      //   use: 'loader2',
      // },
      // {
      //   test: /\.js$/,
      //   use: 'loader3',
      // },
      // {
      //   test: /\.js$/,
      //   use: 'loader4',
      // },
      // 如果想要传递参数 不可以使用use属性来配置loader，要用loader属性配置
      // {
      //   test: /\.js$/,
      //   loader: 'loader5',
      //   options: {
      //     name: 123,
      //     age: 23,
      //   },
      // },
      {
        test: /\.md$/,
        use: {
          loader: 'md-loader',
        },
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebapckPlugin({
      template: path.resolve(__dirname, './index.html'),
    }),
  ],
}
