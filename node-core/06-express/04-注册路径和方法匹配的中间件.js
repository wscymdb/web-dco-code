const express = require('express')

const app = express()

// 注册中间件：对请求方式 和请求路径进行匹配
// 使用 app.method(path,middleware)
app.get('/home', (req, res, next) => {
  console.log('match /home get middleware')
  res.end('home data')
})
app.listen(8888, () => {
  console.log('8888端口监听成功～')
})
