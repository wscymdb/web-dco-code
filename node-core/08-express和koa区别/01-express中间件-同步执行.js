const express = require('express')

const app = express()

// 同步代码 express和koa的执行顺序是一样的

// 编写中间件
app.use((req, res, next) => {
  console.log('express middleware01')
  req.msg = 'aaa'
  next()
  res.json(req.msg) // aaabbbccc
})
app.use((req, res, next) => {
  console.log('express middleware02')
  req.msg += 'bbb'
  next()
})
app.use((req, res, next) => {
  console.log('express middleware03')
  req.msg += 'ccc'
})

// 监听端口
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
