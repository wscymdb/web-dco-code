class Node<T> {
  item: T
  next: Node<T> | null = null

  constructor(item: T) {
    this.item = item
  }
}

class LinkedList<T> {
  private head: Node<T> | null = null
  private size: number = 0

  get length() {
    return this.size
  }

  append(item: T) {
    let newNode = new Node<T>(item)
    this.size++
    if (!this.head) return (this.head = newNode)

    let current = this.head

    while (current.next) {
      current = current.next
    }

    current.next = newNode
  }

  traverse() {
    const values: T[] = []

    let current = this.head

    while (current) {
      values.push(current.item)
      current = current.next
    }

    console.log(values.join('=>'))
  }

  insert(item: T, position: number): boolean {
    // 越界
    if (position < 0 || position > this.size) return false

    const newNode = new Node<T>(item)
    let current = this.head
    // 是否是头部插入
    if (position === 0) {
      newNode.next = current
      this.head = newNode
    } else {
      let previous: Node<T> | null = null
      let index: number = 0
      while (index++ < position) {
        previous = current
        current = current?.next ?? null
      }
      previous!.next = newNode
      newNode.next = current
    }

    this.size++
    return true
  }

  removeAt(position: number): T | null {
    // 越界
    if (position < 0 || position >= this.size) return null

    let current = this.head
    // 是否头部删除
    if (position === 0) {
      this.head = current!.next
    } else {
      let index: number = 0
      let previous: Node<T> | null = null

      while (index++ < position) {
        previous = current
        current = current?.next || null
      }
      previous!.next = current?.next ?? null
    }
    this.size--
    console.log(current?.item)
    return current!.item
  }
}

const linkedList = new LinkedList<string>()

linkedList.append('张三')
linkedList.append('李四')
linkedList.append('王五')

linkedList.insert('赵六', 2)

linkedList.removeAt(2)

linkedList.traverse()

export {}
