const { SyncWaterfallHook } = require('tapable')
// SyncWaterfallHook 当前事件如果有返回值，那么返回值将会作为下一个事件的第一个参数（下一个事件如果有参数 那么第一个参数将会被修改）
class YmCompiler {
  constructor() {
    this.hooks = {
      // 1.创建hooks
      syncWaterfallHook: new SyncWaterfallHook(['name', 'age']),
    }

    //2.用hooks监听事件
    this.hooks.syncWaterfallHook.tap('event1', (name, age) => {
      console.log('event1:', name, age)
      return { info: '123' }
    })

    this.hooks.syncWaterfallHook.tap('event2', (name, age) => {
      console.log('event2:', name, age)
    })
  }
}

const compiler = new YmCompiler()

setTimeout(() => {
  compiler.hooks.syncWaterfallHook.call('章三', 18)
}, 1000)
