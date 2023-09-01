import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { storeContext } from './hoc'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <storeContext.Provider value={store}>
      <App />
    </storeContext.Provider>
  </Provider>
)
