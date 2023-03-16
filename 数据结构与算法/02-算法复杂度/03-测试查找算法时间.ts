import sequenceSearch from './01-查找算法-顺序查找'
import binarySearch from './02-查找算法-二分查找'

const MAX_LENGTH = 20000000
const nums = new Array(MAX_LENGTH).fill(0).map((_, i) => i)
const num = MAX_LENGTH / 2

const start = performance.now()
console.log(sequenceSearch(nums, num))
const end = performance.now()

console.log(end - start)
console.log('-----------------------')

const start2 = performance.now()
console.log(binarySearch(nums, num))
const end2 = performance.now()

console.log(end2 - start2)
