// 定义栈的结构
export default interface IStack<T> {
  push(element: T): void;

  pop(): T | undefined;

  peek(): T | undefined;

  isEmpty(): boolean;

  size(): number;
}
