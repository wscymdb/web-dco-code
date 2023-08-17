import { btPrint } from 'hy-algokit'

class TreeNode<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
  value: T
  constructor(value: T) {
    this.value = value
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

  /**
   * 获取最大值
   * 原理：因为二叉搜索树的性质是比根节点大的在根节点的右侧，所以我们只需要一直往右侧找即可
   */
  getMaxValue(): T | null {
    let current = this.root

    // 确保节点非空且节点有right
    while (current && current.right) {
      current = current.right
    }

    return current?.value || null
  }

  /**
   * 获取最小值
   * 原理：因为二叉搜索树的性质是比根节点小的在根节点的左侧，所以我们只需要一直往左侧找即可
   */
  getMinValue(): T | null {
    let current = this.root

    // 确保节点非空且节点有right
    while (current && current.left) {
      current = current.left
    }

    return current?.value || null
  }
}

const bst = new BSTree<number>()

const arr = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6]
arr.forEach((item) => {
  bst.insert(item)
})

bst.print()

console.log(bst.getMaxValue())
console.log(bst.getMinValue())

export {}
