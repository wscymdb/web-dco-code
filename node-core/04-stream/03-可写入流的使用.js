const fs = require('fs')

const writeStream = fs.createWriteStream('./a.txt', { flags: 'a+' })

// 可以调用多个write写入
// write 方法不会自动调用close
// 当写入完毕后 需要手动调用close事件
writeStream.write(' cym')
writeStream.write(' is')
writeStream.write(' handsome')
writeStream.write(' man', (err) => {
  if (err) return console.log(err)
  console.log('写入完成')
  // writeStream.close()
})

// end 方法 会自动调用close
// 做了两件事 1.将内容写入 2.关闭文件

writeStream.end(' 哈哈哈')

//文件关闭事件
writeStream.on('close', () => {
  console.log('文件被关闭')
})

// 文件打开事件
writeStream.on('open', (fd) => {
  console.log('文件被打开', fd)
})

// 当文件写入完成事件
writeStream.on('finish', () => {
  console.log('finish')
})
