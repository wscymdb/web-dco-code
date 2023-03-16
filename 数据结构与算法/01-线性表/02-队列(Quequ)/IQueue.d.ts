import { ILIst } from '../types/IList'

export interface IQueue<T> extends ILIst<T> {
  // 入队
  enqueue(element: T): void
  // 出队
  dequeue(): T | undefined
}
