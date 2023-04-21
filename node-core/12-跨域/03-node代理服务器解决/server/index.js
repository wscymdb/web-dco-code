const express = require('express')

const app = express()

// 编写中间件
app.post('/test', (req, res, next) => {
  console.log(req.rawHeaders)
  res.end('test api')
})

// 监听端口
app.listen(8002, () => {
  console.log('8002端口监听成功')
})
