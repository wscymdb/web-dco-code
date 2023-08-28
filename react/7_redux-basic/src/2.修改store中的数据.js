const store = require('./store')
console.log(store.getState())
const colorAction = { type: 'change_name', name: '历史' }
store.dispatch(colorAction)
console.log(store.getState())
