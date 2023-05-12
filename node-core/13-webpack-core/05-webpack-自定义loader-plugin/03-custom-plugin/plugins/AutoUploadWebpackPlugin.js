// 自定义plugin 要么是一个函数
// 要么是一个对象， 如果是对象 那么必须实现apply 方法
//  compiler.hooks.xxx   xxx类似vue中的生命周期钩子
// webpack插件的核心就是使用了tapable这个库  所以用法和tapable一样

class AutoUploadWebpackPlugin {
  // 外界就可以穿参进来  eg：new AutoUploadWebpackPlugin({name:'123'})
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync('event1')
  }
}

module.exports = AutoUploadWebpackPlugin
