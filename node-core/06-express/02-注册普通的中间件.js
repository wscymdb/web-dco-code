const express = require('express')

const app = express()

// 总结：当express接收到客户端发送的网络请求时，在所有的中间件中开始进行匹配
// 当匹配到第一个符合要求的中间件时，那么就会执行该中间件
// 后续的中间件是否会执行，取决于上一个中间件是否调用next方法

//通过use注册的中间件是最普通的 最简单的中间件
// 通过use组册的中间件 无论什么请求方式都可以被匹配(只要请求了就能调用此中间件)
app.use((req, res, next) => {
  console.log('normal middle')
})
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
