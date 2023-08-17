import { btPrint } from 'hy-algokit'

class TreeNode<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
  parent: TreeNode<T> | null = null
  value: T
  constructor(value: T) {
    this.value = value
  }
  // 判断当前节点是否是当前父节点的左节点
  get isLeft(): boolean {
    return !!(this.parent && this.parent.left === this)
  }
  // 判断当前节点是否是当前父节点的右节点
  get isRight(): boolean {
    return !!(this.parent && this.parent.right === this)
  }
}
// binary search tree
class BSTree<T> {
  private root: TreeNode<T> | null = null

  /**
   * 插入
   */

  insert(node: T) {
    const newNode = new TreeNode(node)
    // 1.判断根节点是否为空
    if (!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  /**
   * 插入节点--私有方法，
   * 改方法使用的是递归
   * 根据bst树的特点我们可以做以下的操作
   * 首先用插入的节点和当前节点做比较，如果新节点小于当前节点的值，那么新节点放到当前树的左侧，反之放到树的右侧
   * 如果新节点的值小于当前节点的值，在树的左侧做如下判断，如果当前节点的left是空，那么，新值插入到该位置，如果不为空那么继续用当前节点的left节点和新节点做比较，如此往复，直到找到合适位置
   * 如果新节点的值大于当前节点的值，在树的右侧侧做如下判断，如果当前节点的right是空，那么，新值插入到该位置，如果不为空那么继续用当前节点的right节点和新节点做比较，如此往复，直到找到合适位置
   * @param node
   * @param newNode
   */
  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (!node.right) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  print() {
    btPrint(this.root)
  }

  remove(value: T) {
    // 1.搜索节点：当前删除的节点是否存在，如果存在返回这个节点还有他的父节点
    const current = this.searchNode(value)
    // 如果没找到 返回null
    if (!current) return null

    // 获取删除节点的父节点、是父节点的左节点还是右节点
    const parent = current.parent
    const type = current.isLeft ? 'left' : 'right'

    if (parent) parent[type] = null
  }
  private searchNode(value: T): TreeNode<T> | null {
    let current = this.root
    // 如果parent是null 那么可以说明该节点是整个树的根节点
    let parent: TreeNode<T> | null = null
    while (current) {
      // 找到 返回current即可
      if (current.value === value) return current
      // 拿到当前节点的父节点
      parent = current
      if (value > current.value) {
        current = current.right
      } else {
        current = current.left
      }
      // 将当前节点的父节点赋值
      current!.parent = parent
    }
    // 走到这里代表没找到
    return null
  }
}

const bst = new BSTree<number>()

const arr = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6]
arr.forEach((item) => {
  bst.insert(item)
})

bst.print()
bst.remove(8)
bst.print()
export {}
