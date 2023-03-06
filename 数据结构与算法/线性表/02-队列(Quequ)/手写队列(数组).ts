import { IQueue } from './IQueue'

class Queue<T = any> implements IQueue<T> {
  // 保存数据
  private data: T[] = []

  enqueue(...element: T[]): void {
    this.data.push(...element)
  }

  dequeue(): T | undefined {
    return this.data.shift()
  }

  peek(): T | undefined {
    return this.data[0]
  }

  isEmpty(): boolean {
    return this.data.length === 0
  }

  // 使用计算属性，调用的时候 可以当作属性来用，可以少写一个括号
  get size(): number {
    return this.data.length
  }
}

export default Queue
