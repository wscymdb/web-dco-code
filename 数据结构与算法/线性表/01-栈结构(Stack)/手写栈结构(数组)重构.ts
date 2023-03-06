import IStack from './IStack'

// 基于数组的方式实现
class Stack<T = any> implements IStack<T> {
  // 定义一个数组，用于存储元素
  private data: any[] = []

  // push 将一个元素压入栈
  push(element: T) {
    this.data.push(element)
  }

  // pop  将一个元素弹出栈
  pop(): T | undefined {
    return this.data.pop()
  }

  // peek 查看栈顶元素，只是查看
  peek(): T | undefined {
    return this.data[this.data.length - 1]
  }

  // isEmpty  判断栈是否为空
  isEmpty(): boolean {
    return this.data.length === 0
  }

  // siz  返回栈的数据个数
  get size(): number {
    return this.data.length
  }
}

// const s1 = new Stack<string>();
// s1.push("123");
// s1.push("456");
// s1.push("哈哈哈");

// console.log(s1.pop());
// console.log(s1.pop());
// console.log(s1.pop());

// console.log("===>", s1.peek());
// console.log("===>", s1.isEmpty());
// console.log("===>", s1.size);

export default Stack
