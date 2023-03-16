class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reverseList(list: ListNode) {
  // 边界判断
  if (!list) return null
  if (!list.next) return list

  const stack: ListNode[] = []

  let current: ListNode | null = list
  while (current) {
    stack.push(current)
    current = current.next
  }

  let newHead: ListNode = stack.pop()!
  let newHeadCurrent = newHead
  while (stack.length) {
    newHeadCurrent.next = stack.pop()!
    newHeadCurrent = newHeadCurrent.next // 指针后移的关键代码
  }
  newHeadCurrent.next = null // 最后一个的next要指向null
  return newHead
}

const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)

const newHead = reverseList(head)

let current: ListNode | null = newHead
while (current) {
  console.log(current.val)
  current = current.next
}

export {}
