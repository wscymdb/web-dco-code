import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from './features/counter'
import homeSliceReducer from './features/home'
const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    home: homeSliceReducer,
  },
})

export default store
