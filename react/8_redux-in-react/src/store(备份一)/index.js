import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

// 此步骤是为了开始redux-devtools工具
// 可以判断环境然后决定使用哪个  如果使用了compose 就代表不开启
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

//  applyMiddleware(thunk,middleware1,middleware2,...)
// const store = createStore(reducer, applyMiddleware(thunk))

export default store
