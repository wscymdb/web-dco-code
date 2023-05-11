const { SyncHook } = require('tapable')

class YmCompiler {
  constructor() {
    this.hooks = {
      // 1.创建hooks
      syncHook: new SyncHook(['name', 'age']),
    }

    //2.用hooks监听事件
    this.hooks.syncHook.tap('event1', (name, age) => {
      console.log('event1:', name, age)
    })

    this.hooks.syncHook.tap('event2', (name, age) => {
      console.log('event2:', name, age)
    })
  }
}

const compiler = new YmCompiler()

setTimeout(() => {
  compiler.hooks.syncHook.call('章三', 18)
}, 1000)
