const express = require('express')

const app = express()

// 编写中间件
app.get('/test', (req, res, next) => {
  res.end('test api')
})

app.use(express.static('./client'))

// 监听端口
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
