const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  // ctx.req  ctx.res  这是node封装的
  // ctx.request ctx.response 这是koa封装的
  // 所以可以 ctx.res.end() ...
  console.log(ctx)

  ctx.body = 23
})

app.listen(8888, () => {
  console.log('8888端口监听成功')
})
