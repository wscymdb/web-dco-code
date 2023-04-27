const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 这个注释必须紧挨着配置对象 这些才有代码提示
/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  devtool: false, // 生成source-map文件
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'boundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.json', '.ts'],
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          // 使用babel独立文件来解析，运行时webpack会自动读取babel.config.js文件然后将配置项给到babel-loader
          // options: {
          //   // 默认情况下 使用babel-loader 不会转换es6的代码，需要配置
          //   // plugins: ['@babel/plugin-transform-arrow-functions'],
          //   presets: ['@babel/preset-env'],
          // },
        },
      },
      // ts-loader解析
      // {
      //   test: /\.ts$/,
      //   use: ['ts-loader'],
      // },
      //babel解析
      {
        exclude: '/node_modules',
        test: /\.ts$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
}
