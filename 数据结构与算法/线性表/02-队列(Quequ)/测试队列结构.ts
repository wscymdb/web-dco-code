import Queue from './手写队列(数组)'

const queue = new Queue<string>()

queue.enqueue('大叔啊')
queue.enqueue('对啊')
queue.enqueue('使得')

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(queue.peek())
console.log(queue.isEmpty())
console.log(queue.size)
