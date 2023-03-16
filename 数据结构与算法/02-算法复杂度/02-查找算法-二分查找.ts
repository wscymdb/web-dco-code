function binarySearch(arr: number[], num: number) {
  // 定义左边的索引
  let left = 0
  // 定义右边的索引
  let right = arr.length - 1

  // 开始查找
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let midNum = arr[mid]
    if (midNum === num) {
      return mid
    } else if (midNum < num) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
}

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// const res = binarySearch(arr, 3)
// console.log(res)

export default binarySearch
