const express = require('express')

const app = express()

// 编写中间件
app.get('/test/:id', (req, res, next) => {
  const id = req.params.id
  res.end(`获取id${id}`)
})

// 监听端口
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
