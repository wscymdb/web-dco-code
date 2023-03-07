// 将一个十进制的数字转化成二进制的数字

// 利用栈 后进先出的特点
// 首先要知道数学中十进制转换二进制的方法

import Stack from '../手写栈结构(数组)重构'

function decimalToBinary(decimal: number): string {
  // 创建一个栈结构
  const stack = new Stack<number>()

  // 循环
  // 依次除以2，当结果大于0 说明没有除完
  while (decimal > 0) {
    const res = decimal % 2
    stack.push(res)

    decimal = Math.floor(decimal / 2)
  }

  // 现在所有的余数全在栈中，依次出栈即可
  let binary = ''

  while (!stack.isEmpty()) {
    binary += stack.pop()
  }
  return binary
}

console.log(decimalToBinary(10))
