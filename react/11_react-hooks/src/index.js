import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './1_useState的使用/App'
// import App from './2_useEffect的使用/App'
// import App from './3_useContext的使用/App'
// import { ThemeContext, UserContext } from './3_useContext的使用/context'
// import App from './4_useReducer的使用(了解)/App'
// import App from './5_useCallback的使用/App'
// import App from './6_useMemo的使用/App'
// import App from './7_useRef的使用/App'
// import App from './8_useImperativeHandle/App'
// import App from './9_useLayoutEffect的使用/App'
// import App from './10_自定义Hooks/App'
import { TokenContext, UserContext } from './10_自定义Hooks/context'
import { Provider } from 'react-redux'
import store from './11_redux的hooks/store'
// import App from './11_redux的hooks/App'
// import App from './12_useTransition/App'
import App from './13_useDeferredValue/App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <TokenContext.Provider value={{ token: 'kkksdf' }}>
    <UserContext.Provider value={{ name: 'zs' }}>
      <Provider store={store}>
        <App />
      </Provider>
    </UserContext.Provider>
  </TokenContext.Provider>
)

// root.render(
//   <React.StrictMode>
//   <UserContext.Provider value={{ name: '章三', age: 19 }}>
//     <ThemeContext.Provider value={{ color: 'red', size: 30 }}>
//       <App />
//     </ThemeContext.Provider>
//   </UserContext.Provider>
//   </React.StrictMode>
// )
