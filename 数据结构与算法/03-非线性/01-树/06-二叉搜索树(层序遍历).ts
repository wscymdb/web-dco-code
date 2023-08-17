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
   * 层序遍历：一层一层的遍历
   * 这里使用的是队列结构来解决
   * 核心思路是：先入队，再出队，在出队的过程中，然后判断出队节点是否有左(右)节点，如果有左(右)节点，将左(右)节点入队
   * 
   * 步骤如下
   * 先将11节点入队，打印11，然后将11节点出队，然后将11的左右节点入队
   * 利用队列先入先出的特性，此时队列第一位是7，第二位是15
   * 然后7出队，打印7，然后将7的左右节点入队，此时队列内容是15、5、9
   * 然后15出队，打印15，将15的左右节点入队，此时队列内容是5、9、13、20
   * 以此类推知道打印出最后一个元素
   *
   * 树结构如下
   *           11               
        ┌───────┴───────┐       
        7              15       
    ┌───┴───┐       ┌───┴───┐   
    5       9      13      20   
  ┌─┴─┐   ┌─┴─┐   ┌─┴─┐   ┌─┴─┐ 
  3   6   8  10  12  14  18  25 
   */
  levelOrderTraverse() {
    // 判断是否有根节点
    if (!this.root) return
    // 创建一个队列
    const quqeue: TreeNode<T>[] = [this.root]

    // 循环
    while (quqeue.length) {
      // 内进入这里说明队列是有值的，所以一定可以出队，所以做非空断言
      const current = quqeue.shift()!
      console.log(current.value)

      // 判断当前出队节点是否有左节点，如果有则入队
      if (current.left) quqeue.push(current.left)

      // 判断当前出队节点是否有右节点，如果有则入队
      if (current.right) quqeue.push(current.right)
    }
  }
}

const bst = new BSTree<number>()

const arr = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6]
arr.forEach((item) => {
  bst.insert(item)
})

bst.print()

bst.levelOrderTraverse()

export {}
