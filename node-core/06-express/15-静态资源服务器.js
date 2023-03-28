const express = require('express')
const fs = require('fs')

const app = express()

// 部署静态资源
// 可以添加多个
// 当在浏览器输入域名+端口时  默认去找 index.html 如果没有就静态资源文件夹中找(默认去最先添加的静态资源文件夹中找)
//
app.use(express.static('./uploads'))

// 编写中间件
app.get('/test', (req, res, next) => {
  fs.readFile('./uploads/a.png', (err, data) => {
    console.log(data)
    res.end(data)
  })
})

// 监听端口
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
