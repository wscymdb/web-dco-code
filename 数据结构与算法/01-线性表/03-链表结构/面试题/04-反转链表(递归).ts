class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reverseList(head: ListNode): ListNode | null {
  // 边界判断
  if (!head || !head.next) return head

  const newHead = reverseList(head.next ?? null)

  head.next.next = head
  head.next = null

  return newHead
}

const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)

const newHead = reverseList(head)
// console.log(newHead)

let current: ListNode | null = newHead
while (current) {
  console.log(current.val)
  current = current.next
}

export {}
