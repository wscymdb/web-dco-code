const express = require('express')

const app = express()

// 出了可以单独写多个中间件 还可以在一个中间件函数中写多个中间件
// 后面的中间件是否运行 取决于上一个中间件调用next否
app.get(
  '/home',
  (req, res, next) => {
    console.log('match /home get middleware1')
    res.end('home data')
  },
  (req, res, next) => {
    console.log('match /home get middleware2')
  },
  (req, res, next) => {
    console.log('match /home get middleware3')
  }
)
app.listen(8888, () => {
  console.log('8888端口监听成功～')
})
