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
}
export {}
