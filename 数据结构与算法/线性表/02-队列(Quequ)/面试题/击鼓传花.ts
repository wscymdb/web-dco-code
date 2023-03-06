import Queue from '../手写队列(数组)'
// 有一组人，当数到固定的数字的人淘汰
// 然后淘汰的人后面的那一位重新数，
// 依次类推，直至只剩下一人即为胜利者

// 解题思路
/*
  1.利用了队列先入先出的特点
  2.如果只剩一个人的时候即游戏结束
  3.在此期间，所有人开始数数，
  4.数数的过程映射到代码中就是，遍历固定的数，
  5.那么当遍历完毕后，队首的一定是数到固定数的人
  6.直到队列的长度 为1 游戏结束，将这个元素返回
*/

function hotPotato(names: string[], num: number): [string, number] | [] {
  if (!names.length) return []
  //  创建队列
  const queue = new Queue<string>()

  // 入队操作
  queue.enqueue(...names)

  // 淘汰规则
  while (queue.size > 1) {
    // 比如要数到3的人出队，那么遍历2次即可
    // 在这两次中，这两然要做的就行先出队再入队
    // 遍历完毕之后，那么此时的队首就是数到3的人，让其出队
    for (let i = 1; i < num; i++) {
      const name = queue.dequeue()
      if (name) queue.enqueue(name)
    }
    queue.dequeue()
  }
  const hotName = queue.dequeue()!
  const index = names.indexOf(hotName)
  return [hotName, index]
}

const hotName = hotPotato(['张三', '李四', '王五', '赵六', '孙七'], 3)
console.log(hotName)
