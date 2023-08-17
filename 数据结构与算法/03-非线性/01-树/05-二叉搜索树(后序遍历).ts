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
   * 遍历--后序遍历
   * 思路：
   * 先遍历左子树或右子树都没关系(通常先遍历左子树，这样符合人的习惯)，只要保证根节点最后遍历即可
   * 后序遍历的思路是，先遍历左子的最左侧节点，然后再遍历右子树的最右侧节点，最后才遍历根节点，
   * 
   * 这里采用的是递归的方式来实现
   * 递归函数中做了if(node)的判断，也就意味着，只要进入这个条件那么这个节点就有子节点，所以他就是一个子树的根接节点，那么此时将根节点的左侧传入，再将右侧的节点传入，最后才打印，这样就可以保证根节点最后打印
   * 
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
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root)
  }

  private postOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.postOrderTraverseNode(node.left)
      this.postOrderTraverseNode(node.right)
      console.log(node.value)
    }
  }
}

const bst = new BSTree<number>()

const arr = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6]
arr.forEach((item) => {
  bst.insert(item)
})

bst.print()

bst.postOrderTraverse()

export {}
