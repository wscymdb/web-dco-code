const fs = require('fs')

// start :从什么位置开始读取
// end：读取到什么位置（包括end）
//highWaterMark：3  每次读取3个字节 当读到3个字节后就回调函数
const readStream = fs.createReadStream('./demo.txt', {
  start: 6,
  end: 20,
  highWaterMark: 3,
})

// 因为所有的流都是继承EventEmitter所以可以用EventEmitter的方法（看源码接口）
readStream.on('data', (res) => {
  console.log(res.toString())

  // 暂停读取
  readStream.pause()

  // 一秒之后在读取
  setTimeout(() => {
    readStream.resume()
  }, 3000)
})
