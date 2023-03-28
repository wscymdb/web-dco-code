const express = require('express')

const app = express()

// 应用一些中间件
app.use(express.json())

app.use(
  express.urlencoded({
    extended: true, //true：使用node内置的querystring模块(默认)，但是这个模块慢慢被废弃了;false:使用qs模块(三方库)
  })
)

// 编写中间件
app.get('/login', (req, res, next) => {
  console.log(req.body)
  res.end('login api')
})

// 监听端口
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
