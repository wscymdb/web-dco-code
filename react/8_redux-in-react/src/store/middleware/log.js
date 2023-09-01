// 添加一个log的中间件
// 这种改了原本方法的叫做 monkey patch  猴补丁
function log(store) {
  const next = store.dispatch
  function dispatchLog(action) {
    console.log('派发之前的action', action)

    next(action)

    console.log('派发之后的结果', store.getState())
  }

  store.dispatch = dispatchLog
}

export default log
