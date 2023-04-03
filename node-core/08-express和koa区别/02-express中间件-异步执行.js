const express = require('express')
const axios = require('axios')

const app = express()

// 异步代码
// 如果想要在第一个中间件中返回第三个中间件中异步处理后处理的结果
// express中很难办到，机制如此
// 那么只能在第三个中间件中等到结果后 在第三个中间件中返回结果
// 而不能在第一个中间件中返回异步处理后的结果x

// 如果像koa一样在每个中间件的next添加一个await呢
// express的next返回值是void koa中返回值是Promise<any>
// 所以这也就决定了 express即使在next前面加await 也没有用

// 编写中间件
app.use((req, res, next) => {
  console.log('express middleware01')
  req.msg = 'aaa'
  next()
  // res.json(req.msg) // aaabbbccc
})
app.use((req, res, next) => {
  console.log('express middleware02')
  req.msg += 'bbb'
  next()
})
app.use(async (req, res, next) => {
  console.log('express middleware03')

  // 异步代码
  const data = await axios.get(
    'http://180.76.235.241:3000/search?keywords=海阔天空'
  )
  req.msg += data.data.result.songs[0].name
  res.json(req.msg)
})

// 监听端口
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
