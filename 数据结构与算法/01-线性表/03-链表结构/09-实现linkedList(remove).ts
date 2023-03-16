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

  // 私有方法 根据索引获取节点
  private getNode(position: number): Node<T> | null {
    let index = 0
    let current = this.head

    while (index++ < position && current) {
      current = current.next
    }
    return current
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
    let values: any[] = []
    let current = this.head
    while (current) {
      values.push(current.item)
      current = current.next
    }
    console.log(`%c ${values.join('=>')}`, 'color: #bada55')
  }

  /**
   * 插入方法
   * @param item 要插入的元素
   * @param position 插入的位置
   */

  /*
    0.首先要做边界判断，插入的下标不能是负数或者大于当前链表的个数
    1.判断插入的下标是否是0 如果是那么就在头部插入
    2.反之 以下步骤
    3.插入的核心就是拿到被插入位置的前一个节点和后一个节点
    4.将前一个节点的next指向插入的新的节点
    5.将插入的新的节点的next指向后一个节点
  */
  insert(item: T, position: number): boolean {
    const newNode = new Node<T>(item)

    // 边界判断
    if (position < 0 || position > this.size) return false

    // 判断是否是头部添加
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let previous = this.getNode(position - 1)

      newNode.next = previous!.next
      previous!.next = newNode
    }
    this.size++
    return true
  }

  /**
   * 删除指定位置的节点
   * @param position 要删除的下标
   * @returns
   */

  /*
    1.首先是要做边界判断，删除的下标不可是负数或者大于等于当前链表的size，因为下标 是从0开始
    2.判断插入的下标是否是0 如果是那么就在头部删除(就是将head指向head.next)
    3.反之 以下步骤 
    4.删除的核心就是找到当前要删除的下标对应的节点前一个节点和后一个节点
    5.然后让前一个节点的next指向后一个节点，那么此时当前要删除的元素就没有被元素指向了，就会被GC回收

  */
  removeAt(position: number): T | null {
    // 越界判断
    if (position < 0 || position >= this.size) return null

    let current = this.head
    if (position === 0) {
      this.head = current?.next ?? null
    } else {
      let previous = this.getNode(position - 1)
      current = previous?.next ?? null
      previous!.next = previous?.next?.next ?? null
    }
    this.size--
    return current?.item ?? null
  }

  // 根据value删除
  remove(value: T): T | null {
    const index = this.indexOf(value)
    return this.removeAt(index)
  }

  /**
   * 根据下标获取节点
   * @param position 要获取节点的下标
   * @returns
   */
  get(position: number): T | null {
    // 越界判断
    if (position < 0 || position >= this.size) return null

    return this.getNode(position)?.item ?? null
  }

  /**
   * 修改
   * @param value 要修改的内容
   * @param position 节点索引
   * @returns boolean
   */
  update(value: T, position: number): boolean {
    // 越界判断
    if (position < 0 || position >= this.size) return false

    // 上面做过边界判断 此时的current 一定有值

    let current = this.getNode(position) as Node<T>
    current.item = value

    return true
  }

  /**
   * 根据内容查找索引
   * @param value 查找索引的值
   * @returns
   */
  indexOf(value: T): number {
    let index = 0
    let current = this.head
    while (current) {
      if (current.item === value) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }
}

const linkedList = new LinkedList<string>()
linkedList.append('老大')
linkedList.append('二弟')
linkedList.append('三弟')

console.log(linkedList.remove('二弟'))
console.log(linkedList.remove('老大'))
console.log(linkedList.remove('三弟'))
linkedList.traverse()
export {}
