import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter'

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})

export default store
