const store = require('./store')
const { changeNameAction } = require('./store/actionCreators')

// 数据发生变化 自定执行回调函数
// subscribe返回一个函数 调用就表示取消订阅
const unsubscribe = store.subscribe(() => {
  console.log('订阅数据的变化：', store.getState())
})

// actionCreator :创建action
// 如果要多次修改name，每次都要写 一个对象 太过于麻烦
// 所以可以创建一个函数动态的生成修改name的action
// 这些生成器应该放在独立的文件中 这样所有的组件都能复用
// const changeNameAction = (name) => ({ type: 'change_name', name })

store.dispatch(changeNameAction('里斯'))
// 取消订阅
unsubscribe()
store.dispatch(changeNameAction('王武'))
