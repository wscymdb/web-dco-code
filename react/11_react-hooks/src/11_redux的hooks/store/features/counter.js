import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 99,
    message: 'hello',
  },
  reducers: {
    addNumberAction(state, { payload }) {
      state.counter = state.counter + payload
    },
  },
})

export const { addNumberAction } = counterSlice.actions

export default counterSlice.reducer
