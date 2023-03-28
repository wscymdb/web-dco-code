const express = require('express')
const multer = require('multer')

const app = express()

const formdata = multer()

// 编写中间件
// 如果字段都是用formdata格式上传的 使用any  字段被放在req.body中
app.get('/test', multer.any(), (req, res, next) => {
  console.log(req.body)
  res.end('test api')
})

// 监听端口
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
