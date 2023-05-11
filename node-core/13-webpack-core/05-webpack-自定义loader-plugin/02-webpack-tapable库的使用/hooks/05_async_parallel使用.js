const { AsyncParallelHook } = require('tapable')
// AsyncParallelHook 并行，下个事件与当前事件同时执行
class YmCompiler {
  constructor() {
    this.hooks = {
      // 1.创建hooks
      asyncParallelHook: new AsyncParallelHook(['name', 'age']),
    }

    //2.用hooks监听事件  监听异步事件用 tapAsync 和 callAsync
    this.hooks.asyncParallelHook.tapAsync('event1', (name, age) => {
      setTimeout(() => {
        console.log('event1:', name, age)
      }, 3000)
    })

    this.hooks.asyncParallelHook.tapAsync('event2', (name, age) => {
      setTimeout(() => {
        console.log('event2:', name, age)
      }, 3000)
    })
  }
}

const compiler = new YmCompiler()

setTimeout(() => {
  compiler.hooks.asyncParallelHook.callAsync('章三', 18)
}, 0)
