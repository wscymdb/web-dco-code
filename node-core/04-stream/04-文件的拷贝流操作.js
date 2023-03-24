const fs = require('fs')

// 方式一：一次性读取和写入
// 缺点 ： 没法精准控制；文件太大时不合适一次性读取和写入
// fs.readFile('./a.txt', (err, data) => {
//   if (err) return console.log(err)
//   fs.writeFile('./a copy.txt', data, (err) => {
//     if (err) return console.log(err)
//   })
// })

// 方式二  使用可读流和可写流
const readStream = fs.createReadStream('./a.txt')
const writeStream = fs.createWriteStream('./a copy.txt')

// readStream.on('data', (data) => {
//   writeStream.end(data)
// })

// 方式三 在可读流和可写流之间建立一个管道
// pipe 方法会将读取到的流全部写入到文件中
readStream.pipe(writeStream)
