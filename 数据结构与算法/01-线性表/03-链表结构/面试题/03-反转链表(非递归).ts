class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reverseList(head: ListNode) {
  if (!head || !head.next) return head

  let newHead: ListNode | null = null
  let current: ListNode | null = head

  while (head) {
    current = current!.next
    head.next = newHead
    newHead = head
    head = current!
    console.log(current)
  }
  return newHead
}

const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)

const newHead = reverseList(head)
console.log(newHead)

// let current: ListNode | null = newHead
// while (current) {
//   console.log(current.val)
//   current = current.next
// }

export {}
