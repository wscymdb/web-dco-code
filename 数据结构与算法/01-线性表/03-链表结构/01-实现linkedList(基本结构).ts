// 创建Node节点类
class Node<T> {
  item: T
  next: Node<T> | null = null
  constructor(item: T) {
    this.item = item
  }
}

// 创建linkedList类
class LinkedList<T> {
  private header: Node<T> | null = null
  private size: number = 0

  get length() {
    return this.size
  }
}

export {}
