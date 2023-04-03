const Koa = require('koa')

const app = new Koa()

// 手动区分路径和method
app.use((ctx, next) => {
  console.log(ctx)
  const path = ctx.path
  if (path === '/users') return (ctx.body = 'users')

  ctx.body = 'network'
})

app.listen(8888, () => {
  console.log('8888端口监听成功')
})
