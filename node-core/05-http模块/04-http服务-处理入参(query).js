const http = require('http')
const url = require('url')

// 创建一个http服务器
const server = http.createServer((req, res) => {
  // 解析query类型的参数

  // 1.解析url
  const urlStr = req.url
  const userInfo = url.parse(urlStr)

  // 2.解析query
  const queryString = userInfo.query
  const queryInfo = new URLSearchParams(queryString)
  console.log(queryInfo)
  res.end('hello  world')
})

// 监听端口
server.listen(3000, () => {
  console.log('3000端口监听成功')
})
