const { AsyncSeriesHook } = require('tapable')
// AsyncSeriesHook 串行，会等待当前事件执行完毕后，才执行下一个事件
class YmCompiler {
  constructor() {
    this.hooks = {
      // 1.创建hooks
      asyncSeriesHook: new AsyncSeriesHook(['name', 'age']),
    }

    //2.用hooks监听事件  监听异步事件用 tapAsync 和 callAsync

    // 使用串行 必须要传入一个回调函数 然后在事件中调用这个回调
    this.hooks.asyncSeriesHook.tapAsync('event1', (name, age, cb) => {
      setTimeout(() => {
        console.log('event1:', name, age)
        cb()
      }, 3000)
    })

    this.hooks.asyncSeriesHook.tapAsync('event2', (name, age, cb) => {
      setTimeout(() => {
        console.log('event2:', name, age)
        cb()
      }, 3000)
    })
  }
}

const compiler = new YmCompiler()

setTimeout(() => {
  compiler.hooks.asyncSeriesHook.callAsync('章三', 18, () => {
    console.log('所有事件执行完毕～')
  })
}, 0)
