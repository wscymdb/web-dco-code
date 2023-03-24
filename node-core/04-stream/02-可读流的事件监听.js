const fs = require('fs')

// start :从什么位置开始读取
// end：读取到什么位置（包括end）
//highWaterMark：3  每次读取3个字节 当读到3个字节后就回调函数
const readStream = fs.createReadStream('./demo.txt', {
  start: 6,
  end: 12,
  highWaterMark: 3,
})

// 监听读取到的数据
// data事件
readStream.on('data', (res) => {
  console.log(res.toString())
})

// open事件
// 有一个参数  fd 当前文件的fd
readStream.on('open', (fd) => {
  console.log('通过流将文件打开！', fd)
})

// end事件
readStream.on('end', () => {
  console.log('读取文件结束')
})

//close事件
readStream.on('close', () => {
  console.log('文件被关闭')
})
