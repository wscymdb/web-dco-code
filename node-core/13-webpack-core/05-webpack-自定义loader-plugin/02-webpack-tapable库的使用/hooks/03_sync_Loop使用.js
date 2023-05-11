const { SyncLoopHook } = require('tapable')

// SyncLoopHook  如果返回的不是undefined 那么当前的时间会循环调用

let count = 0
class YmCompiler {
  constructor() {
    this.hooks = {
      // 1.创建hooks
      syncLoopHook: new SyncLoopHook(['name', 'age']),
    }

    //2.用hooks监听事件
    this.hooks.syncLoopHook.tap('event1', (name, age) => {
      if (count <= 5) {
        console.log('event1:', name, age)
        count++
        return true
      }
    })

    this.hooks.syncLoopHook.tap('event2', (name, age) => {
      console.log('event2:', name, age)
    })
  }
}

const compiler = new YmCompiler()

setTimeout(() => {
  compiler.hooks.syncLoopHook.call('章三', 18)
}, 1000)
