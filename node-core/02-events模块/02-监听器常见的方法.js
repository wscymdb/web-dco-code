const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('aa', () => {})
emitter.on('bb', () => {})
emitter.on('bb', () => {})

console.log(emitter.eventNames())
console.log(emitter.getMaxListeners())
console.log(emitter.listenerCount('bb'))
console.log(emitter.listeners('bb'))
