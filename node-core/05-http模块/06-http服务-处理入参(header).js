const http = require('http')
const url = require('url')

// 创建一个http服务器
const server = http.createServer((req, res) => {
  // 查看headers的信息
  console.log(req.headers)
  res.end('查看headers信息')
})

// 监听端口
server.listen(8000, () => {
  console.log('8000端口监听成功')
})
