const express = require('express')

const app = express()

// 将公共的逻辑抽出来
// 自己手动写
// app.use((req, res, next) => {
//   if (req.headers['content-type'] === 'application/json') {
//     req.on('data', (data) => {
//       req.body = JSON.parse(data)
//     })

//     req.on('close', () => {
//       next()
//     })
//   } else {
//     next()
//   }
// })

// 或者使用express的中间件 效果和上面一样
app.use(express.json())

// 解析application/x-www-form-urlencoded
app.use(express.urlencoded())

app.post('/login', (req, res, next) => {
  console.log(req.body)
  const infoJson = req.body
  if (infoJson.username === 'admin' && infoJson.password === 123456) {
    res.end('login success~')
  } else {
    res.end('login fail~')
  }
})

app.listen(8888, () => {
  console.log('8888端口监听成功～')
})
