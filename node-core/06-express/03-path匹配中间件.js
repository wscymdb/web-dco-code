const express = require('express')

const app = express()

// 注册路径匹配要求的中间件
// 路径匹配的中间件只对path进行限制，不会对method进行限制的
app.use('/home', (req, res, next) => {
  console.log('match /home middleware')
  res.end('home data')
})

app.listen(8888, () => {
  console.log('8888端口监听成功～')
})
