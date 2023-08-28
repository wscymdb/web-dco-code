// 1.初始化数据
const initialState = {
  name: 'zs',
  level: 199,
}

// 2.定义一个reducer函数：纯函数
//  两个参数
// 参数一state： store中目前保存的state
// 参数二action：本次需要更新的action(dispatch传入的action)
// 返回值：她的返回值会作为store的state
function reducer(state = initialState, action) {
  // 更新数据 返回更新后的state
  // 使用switch 比if判断更加直观
  switch (action.type) {
    case 'change_name':
      return { ...state, name: action.name }
  }

  // 没有更新数据 返回之前的state
  return state
}

module.exports = reducer
