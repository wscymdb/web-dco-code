const http = require('http')

// 创建一个http服务器
const server = http.createServer((req, res) => {
  // res对象的本质就是writable可写流
  // res.statusCode = 200

  // 设置header信息： 数据类型以及数据编码格式
  // res.setHeader('Content-Type', 'text/plain;charset=utf8')

  // 和status code一起设置
  res.writeHead(200, {
    'Content-Type': 'application/json;charset=utf8',
  })
  console.log(123)
  res.end('response测试，你好')
})

// 监听端口
server.listen(8000, () => {
  console.log('8000端口监听成功')
})
