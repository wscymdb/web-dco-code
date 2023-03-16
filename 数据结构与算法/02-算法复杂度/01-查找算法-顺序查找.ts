/**
 * 顺序查找
 * @param arr 要查找的数组
 * @param num 要查找的数字
 * @returns 找到的索引，未找到返回-1
 */

function sequenceSearch(arr: number[], num: number) {
  const length = arr.length
  for (let i = 0; i < length; i++) {
    const item = arr[i]
    if (item === num) return i
  }
  return -1
}

// const numArr = [1, 2, 3, 45, 66, 77, 88, 98, 444, 1822]
// const res = sequenceSearch(numArr, 88)
// console.log(res)
export default sequenceSearch
