const express = require('express')
const fs = require('fs')

const app = express()

// 编写中间件
app.get('/test', (req, res, next) => {
  const file = fs.readFile('./uploads/a.png', (err, data) => {
    res.end(data)
  })
})

// 监听端口
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
