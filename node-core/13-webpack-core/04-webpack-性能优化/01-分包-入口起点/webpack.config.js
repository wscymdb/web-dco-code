const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  // 使用多入口
  entry: {
    main: {
      dependOn: 'shared',
      import: './src/main.js',
    },
    index: {
      import: './src/index.js',
      dependOn: 'shared2',
    },
    shared: ['axios'],
    shared2: ['dayjs', 'axios'],
  },
  devtool: false,
  output: {
    // 因为使用的是多入口，那么打包的时候是webpack不知道讲那个文件代码放到bundle.js中
    // 这时候可以使用占位符，会自动获取入口的那么然后命名
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, './build'),
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
