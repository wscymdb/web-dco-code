const EventEmitter = require('events')

// 创建实例
const emmiter = new EventEmitter()

// 监听事件
emmiter.on('ym', ymE)

function ymE(res) {
  console.log(res)
}
// 发射事件
setTimeout(() => {
  emmiter.emit('ym', [2, 3, 4, 5])
  console.log(emmiter)
  //取消事件
  emmiter.off('ym', ymE)
  console.log(emmiter)
}, 2000)
