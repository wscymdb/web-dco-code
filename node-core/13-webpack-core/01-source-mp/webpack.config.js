const path = require('path')

// 这个注释必须紧挨着配置对象 这些才有代码提示
/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  devtool: 'eval', // 生成source-map文件
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'boundle.js',
    clean: true,
  },
}
