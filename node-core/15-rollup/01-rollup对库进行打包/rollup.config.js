// 默认情况下rollup只会处理es module  但是引用了lodash lodash使用的是common js 所以要借助插件来解决

const commonjs = require('@rollup/plugin-commonjs')
const noderesolve = require('@rollup/plugin-node-resolve')
const babel = require('@rollup/plugin-babel')
const terser = require('@rollup/plugin-terser')

module.exports = {
  // 入口
  input: './lib/index.js',

  // 出口
  output: {
    format: 'umd', // 打包的环境
    name: 'myUtil', // 使用umd必须要有name 这样打包到浏览器中这个名字就会作为全局的变量
    file: './dist/bundle.js', // 打包文件到哪里
    // 创建 iife 或 umd 格式的 bundle 时，你需要通过 output.globals 选项来提供全局变量名称，以替换外部引入
    globals: {
      lodash: '_',
      dayjs: 'dayjs',
    },
  },
  external: ['lodash'], // 忽略打包某个库 这时候要提醒使用者安装这个库才能正常使用我们的库或框架
  plugins: [
    commonjs(),
    noderesolve(),
    babel({ presets: ['@babel/preset-env'] }), // babel配置也可以单独放在一个配置文件 同webpack一样
    terser(),
  ],

  // 出口也可使一个数组  可以打包多个环境的包
  // output: [
  //   {
  //     format: 'cjs',
  //     name: 'myUtil',
  //     file: './dist/bundle.cjs.js',
  //   },
  //   {
  //     format: 'iife',
  //     name: 'myUtil',
  //     file: './dist/bundle.browser.js',
  //   },
  // ],
}
