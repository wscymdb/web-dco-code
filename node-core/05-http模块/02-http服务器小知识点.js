const http = require('http')

// 创建一个http服务器
// 如果通过浏览器访问服务 会访问两次  这是浏览器的特性
// 第一次访问服务本身 第二次访问服务的iconfavor(图标)
const server = http.createServer((req, res) => {
  console.log('访问了我')
  res.end('hello')
})

// 监听端口
server.listen(3000, () => {
  console.log('3000端口监听成功')
})
