const { createStore } = require('redux')
import reducer from './reducer'

const store = createStore(reducer)
module.exports = store
