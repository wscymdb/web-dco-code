import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 888,
  },
  reducers: {
    addNumber(state, { payload }) {
      // 值都在payload中
      // 这里也简化了 不需要返回一个新对象了 内部帮我们做了
      state.count = state.count + payload
      // return { ...state, count: payload + state.count }
    },
    subNumber(state, action) {},
  },
})

// 外界需要使用dispatch派发reducers中的事件才能完成调用，不能直接调用reducers中的函数 否则没有state和action参数
export const { addNumber, subNumber } = counterSlice.actions
export default counterSlice.reducer
