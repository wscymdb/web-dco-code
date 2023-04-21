const express = require('express')

const app = express()

// cors中间件 解决跨域
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')

  res.set(
    'Access-Control-Allow-Headers',
    'Accept,Accept-Encoding,Accept-Language,ConnectionContent-Length,Content-Type,Host,0rigin, Referer,User-Agent'
  )
  res.set('Access-Control-Allow-Credentials', true)

  // console.log(req.method)
  // if (req.method === 'OPTIONS') {
  //   res.status(204)
  //   res.end('')
  // } else {
  //   next()
  // }
  next()
})

// 编写中间件
app.post('/test', (req, res, next) => {
  res.end('test api')
})

// 监听端口
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
