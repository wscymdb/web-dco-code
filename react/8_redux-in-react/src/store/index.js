import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import counterReducer from './counter'
import homeReducer from './home'
import thunk from 'redux-thunk'
import { log } from './middleware'

// 合并各个模块的reducer
const reducer = combineReducers({
  counter: counterReducer,
  home: homeReducer,
})

// 此步骤是为了开始redux-devtools工具
// 可以判断环境然后决定使用哪个  如果使用了compose 就代表不开启
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

log(store)

export default store
