import { ILIst } from '../types/IList'

// 定义栈的结构
export default interface IStack<T> extends ILIst<T> {
  push(element: T): void

  pop(): T | undefined
}
