const http = require('http')
const fs = require('fs')

// 以下方式是错误的
// 虽然可以写入成功 但是不仅仅只有图片的数据  还有别的数据 比如上传时候的图片的key  以及其它的数据
// 创建一个http服务器
const server = http.createServer((req, res) => {
  // 1.创建一个可写流
  const writeStream = fs.createWriteStream('./01.png', { flags: 'a+' })
  req.on('data', (data) => {
    writeStream.write(data)
    // console.log(data)
  })
  req.on('end', () => {
    writeStream.close()
    console.log('图片上传完成')
    res.end('file success')
  })
})
// 监听端8
server.listen(8080, () => {
  console.log('8080端口监听成功')
})
