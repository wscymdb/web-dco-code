// 默认情况下rollup只会处理es module  但是引用了lodash lodash使用的是common js 所以要借助插件来解决

const commonjs = require('@rollup/plugin-commonjs')
const noderesolve = require('@rollup/plugin-node-resolve')
const babel = require('@rollup/plugin-babel')
const terser = require('@rollup/plugin-terser')
const postcss = require('rollup-plugin-postcss')
const vue = require('rollup-plugin-vue')
const replace = require('@rollup/plugin-replace')
const server = require('rollup-plugin-serve')
const livereload = require('rollup-plugin-livereload')

const isProd = process.env.NODE_ENV

const plugins = [
  commonjs(),
  noderesolve(),
  babel({ presets: ['@babel/preset-env'] }), // babel配置也可以单独放在一个配置文件 同webpack一样

  postcss({
    plugins: [require('postcss-preset-env')], // 也可以单独放到一个配置文件中配置
  }),
  vue(),
  // vue打包的时候会用到 process.env.NODE_ENV 所以在打包后的源码中添加这个变量
  // 如果是 'production'  解析的时候会将引号去掉，那么就是production  会报错因为没有定义这个变量  所以要 `'production'` 即使引号去掉了也还是一个字符串
  replace({
    'process.env.NODE_ENV': `'production'`,
  }),
]
// 区分环境 比如开发环境不需要压缩代码
if (isProd) {
  plugins.push(terser())
} else {
  const extraPlugins = [
    server({
      port: 8888,
      open: true,
      contentBase: '.', // 启动文件夹 展示那个文件夹下的文件
    }),
    livereload(),
  ]
  plugins.push(...extraPlugins)
}

module.exports = {
  // 入口
  input: './src/index.js',

  // 出口
  output: {
    format: 'iife', // 打包的环境
    name: 'myUtil', // 使用umd必须要有name 这样打包到浏览器中这个名字就会作为全局的变量
    file: './dist/bundle.js', // 打包文件到哪里
    // 创建 iife 或 umd 格式的 bundle 时，你需要通过 output.globals 选项来提供全局变量名称，以替换外部引入
    globals: {
      lodash: '_',
      dayjs: 'dayjs',
    },
  },
  plugins,
  // plugins:[
  //   commonjs(),
  //   noderesolve(),
  //   babel({ presets: ['@babel/preset-env'] }), // babel配置也可以单独放在一个配置文件 同webpack一样
  //   terser(),
  //   postcss({
  //     plugins: [require('postcss-preset-env')], // 也可以单独放到一个配置文件中配置
  //   }),
  //   vue(),
  //   // vue打包的时候会用到 process.env.NODE_ENV 所以在打包后的源码中添加这个变量
  //   // 如果是 'production'  解析的时候会将引号去掉，那么就是production  会报错因为没有定义这个变量  所以要 `'production'` 即使引号去掉了也还是一个字符串
  //   replace({
  //     'process.env.NODE_ENV': `'production'`,
  //   }),
  //   server({
  //     port: 8888,
  //     open: true,
  //     contentBase: '.', // 启动文件夹 展示那个文件夹下的文件
  //   }),
  //   livereload(),
  // ],
}
