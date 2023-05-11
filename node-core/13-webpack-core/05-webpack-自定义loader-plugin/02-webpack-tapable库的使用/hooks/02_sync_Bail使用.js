const { SyncBailHook } = require('tapable')
// SyncBailHook 如果有返回值 不会执行后续事件
class YmCompiler {
  constructor() {
    this.hooks = {
      // 1.创建hooks
      syncBailHook: new SyncBailHook(['name', 'age']),
    }

    //2.用hooks监听事件
    this.hooks.syncBailHook.tap('event1', (name, age) => {
      console.log('event1:', name, age)
      return 123
    })

    this.hooks.syncBailHook.tap('event2', (name, age) => {
      console.log('event2:', name, age)
    })
  }
}

const compiler = new YmCompiler()

setTimeout(() => {
  compiler.hooks.syncBailHook.call('章三', 18)
}, 1000)
