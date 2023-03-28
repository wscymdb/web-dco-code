const express = require('express')
const moragan = require('morgan')
const fs = require('fs')

const app = express()

// 应用第三方中间件
// 会将每次请求的记录放在目标路径文件中
const writeStream = fs.createWriteStream('./logs/access.log')
app.use(moragan('combined', { stream: writeStream }))

// 编写中间件
app.get('/test', (req, res, next) => {
  res.end('test api')
})

// 监听端口
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
