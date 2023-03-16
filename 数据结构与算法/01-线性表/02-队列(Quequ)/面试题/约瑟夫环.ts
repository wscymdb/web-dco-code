// leetcode url
//  https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/

import Queue from '../手写队列(数组)'
function lastRemaining(n: number, m: number): number {
  const queue = new Queue<number>()

  // 将数字入队
  for (let i = 0; i < n; i++) {
    queue.enqueue(i)
  }

  // 终止条件
  while (queue.size > 1) {
    for (let i = 1; i < m; i++) {
      const num = queue.dequeue()!
      queue.enqueue(num)
    }
    queue.dequeue()
  }

  return queue.dequeue()!
}

console.log(lastRemaining(5, 3))
console.log(lastRemaining(10, 17111))
