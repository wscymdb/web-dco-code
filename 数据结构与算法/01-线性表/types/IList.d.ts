export interface ILIst<T> {
  peek(): T | undefined

  isEmpty(): boolean

  get size(): number
}
