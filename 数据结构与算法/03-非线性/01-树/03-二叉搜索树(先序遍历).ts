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
   * 遍历--先序遍历
   * 思路：
   * 先序遍历的思路是，只要有根节点，那么就优先遍历根节点，然后才遍历左子节点和右子节点，这两个的顺序不打紧，但是通常来说是先遍历左节点，在遍历右节点
   * 这里采用的是递归的方式来实现
   * 递归函数中做了if(node)的判断，也就意味着，只要进入这个条件那么这个节点就有子节点，所以他就是一个子树的根接节点，就会打印该节点的内容
   * 打印之后就继续递归调用该方法，并将节点的左边传入，上面说到一半先遍历左边的，然后在递归该方法将节点的右边传入
   *
   * 递归调用该函数 会先将this.preOrderTraverseNode(node.left)执行完  直到node是null
   * 然后执行this.preOrderTraverseNode(node.right)，在执行这个的时候遇到this.preOrderTraverseNode(node.left)会继续执行this.preOrderTraverseNode(node.left)
   * 所以可以做到先打印左边的在打印右边的
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
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root)
  }

  private preOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      console.log(node.value)

      this.preOrderTraverseNode(node.left)
      this.preOrderTraverseNode(node.right)
    }
  }
}

const bst = new BSTree<number>()

const arr = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6]
arr.forEach((item) => {
  bst.insert(item)
})

bst.print()

bst.preOrderTraverse()
export {}
