const Koa = require('koa')

// 创建服务器
const app = new Koa()

// koa的执行顺序是
// 先执行第一个中间件如果该中间件调用了next，那么就会执行第二个中间件
// 如果第二个中间件也调用了next 那么就会执行第三个中间件
// 然后当第三个中间件内容执行完毕后，在执行第二个中间件next之后的代码（如果有的话）
// 最后执行第一个中间件next之后的代码（如果有的话）
// 这种执行顺序的过程叫做洋葱模型

app.use((ctx, next) => {
  console.log('koa middleware01')
  next()
  ctx.msg += 'aaa'
  ctx.body = ctx.msg // undefinedcccbbbaaa
})
app.use((ctx, next) => {
  console.log('koa middleware02')
  next()
  ctx.msg += 'bbb'
})
app.use((ctx, next) => {
  console.log('koa middleware03')
  ctx.msg += 'ccc'
})

// 监听
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
