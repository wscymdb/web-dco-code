const Koa = require('koa')
const axios = require('axios')

// 创建服务器
const app = new Koa()

// 异步代码
// 默认情况下 如果next之后的代码中有异步操作，koa是不会等待异步结果出来的 而是直接执行下一步

// 解决  koa中的解决方案很简单
// 只需要在next 前面加 await即可
// 那么当前的中间件就变成了异步函数 那么上一个中间件要想等到当前中间件的结果
// 上一个中间件也要在next前面加await

app.use(async (ctx, next) => {
  console.log('koa middleware01')
  ctx.msg = 'aaa'
  await next()
  ctx.body = ctx.msg // aaabbb海阔天空
})
app.use(async (ctx, next) => {
  console.log('koa middleware02')
  ctx.msg += 'bbb'

  await next()
})
app.use(async (ctx, next) => {
  console.log('koa middleware03')

  // 异步代码
  const res = await axios.get(
    'http://180.76.235.241:3000/search?keywords=海阔天空'
  )

  ctx.msg += res.data.result.songs[0].name
})

// 监听
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
