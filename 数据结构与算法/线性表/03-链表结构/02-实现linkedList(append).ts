// 创建Node节点类
class Node<T = any> {
  item: T
  next: Node<T> | null = null
  constructor(item: T) {
    this.item = item
  }
}

// 创建linkedList类
class LinkedList<T> {
  private head: Node<T> | null = null
  private size: number = 0

  get length() {
    return this.size
  }

  // 追加节点
  append(item: T) {
    const newNode = new Node<T>(item)

    this.size++
    // 判断  只有当head是空的时候才将节点给head
    // 反之则将新的节点给当前节点的最后一个节点的next
    if (!this.head) return (this.head = newNode)

    let current = this.head
    while (current.next) {
      current = current.next
    }

    current.next = newNode
  }

  // 遍历链表
  traverse() {
    let current = this.head
    while (current) {
      console.log(current.item)
      current = current.next
    }
  }
}

const linkedList = new LinkedList<string>()
linkedList.append('老大')
linkedList.append('二弟')
linkedList.append('三弟')

linkedList.traverse()

export {}
