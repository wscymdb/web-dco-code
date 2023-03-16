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

  get lenght() {
    return this.size
  }

  private getNode(position: number) {
    let current = this.head
    let index = 0
    while (index++ < position && current) {
      current = current.next
    }
    return current
  }

  append(item: T): boolean {
    // 非空判断
    if (!item) return false

    const newNode = new Node(item)
    let current = this.head
    this.size++

    // 判断头部是否有东西
    if (!current) {
      this.head = newNode
      return true
    }

    while (current.next) {
      current = current.next
    }
    current.next = newNode

    return true
  }

  insert(item: T, position: number) {
    // 边界判断
    if (position < 0 || position > this.size) return false

    const newNode = new Node(item)

    // 判断position是否是0
    let current = this.head
    if (position === 0) {
      newNode.next = current
      this.head = newNode
    } else {
      let previous = this.getNode(position - 1)
      newNode.next = previous!.next
      previous!.next = newNode
    }
    this.size++
    return true
  }

  removeAt(position: number) {
    // 边界判断
    if (position < 0 || position >= this.size) return null
    let current = this.head
    if (position === 0) {
      this.head = current!.next
    } else {
      let previous = this.getNode(position - 1)
      current = previous!.next
      previous!.next = previous!.next?.next ?? null
    }
    this.size--
    return current!.item
  }

  get(position: number) {
    // 边界判断
    if (position < 0 || position >= this.size) return null

    return this.getNode(position)!.item
  }

  update(value: T, position: number) {
    // 边界判断
    if (position < 0 || position >= this.size) return false

    const current = this.getNode(position) as Node<T>
    current.item = value
    return true
  }

  indexOf(value: T) {
    let index = 0
    let current = this.head

    while (current) {
      if (current.item === value) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
  traverse() {
    const values: T[] = []

    let current = this.head

    while (current) {
      values.push(current.item)
      current = current.next
    }
    console.log(values.join('->'))
  }
}

const linkedList = new LinkedList<number>()
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)

// linkedList.insert(1.4, 1)

console.log(linkedList.removeAt(0))
console.log(linkedList.get(3))
console.log(linkedList.update(111, 0))
console.log(linkedList.update(222, 1))
console.log(linkedList.update(333, 2))

console.log(linkedList.indexOf(444))
linkedList.traverse()

export {}
