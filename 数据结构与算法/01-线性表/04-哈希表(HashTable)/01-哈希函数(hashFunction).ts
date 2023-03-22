function hashFunction(key: string, max: number): number {
  let hashCode = 0

  for (let i = 0; i < key.length; i++) {
    // 采用秦九韶算法进行（霍纳算法）优化
    // 不理解没关系  透过现象看本质就行了
    // 说白了这里其实就是为了将字符串映射成数字，然后作为数组的下标
    // 然后进行取余操作（压缩数字 不然数字太大了 会有很多没有的空间浪费性能）
    hashCode = 31 * hashCode + key.charCodeAt(i)
  }

  return hashCode % max
}

console.log(hashFunction('abc', 6))
console.log(hashFunction('陈哈哈', 6))
console.log(hashFunction('李四', 6))
console.log(hashFunction('word', 6))
console.log(hashFunction('code', 6))
