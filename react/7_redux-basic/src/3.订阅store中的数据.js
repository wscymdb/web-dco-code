const store = require('./store')

// 数据发生变化 自定执行回调函数
// subscribe返回一个函数 调用就表示取消订阅
const unsubscribe = store.subscribe(() => {
  console.log('订阅数据的变化：', store.getState())
})

store.dispatch({ type: 'change_name', name: '历史' })
// 取消订阅
unsubscribe()
store.dispatch({ type: 'change_name', name: '你好' })
