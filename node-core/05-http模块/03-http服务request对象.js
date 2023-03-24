const http = require('http')

// 创建一个http服务器
const server = http.createServer((req, res) => {
  // url 信息
  console.log(req.url)
  // 请求方式
  console.log(req.method)
  // 请求头
  console.log(req.headers)

  res.end('hello  world')
})

// 监听端口
server.listen(3000, () => {
  console.log('3000端口监听成功')
})
