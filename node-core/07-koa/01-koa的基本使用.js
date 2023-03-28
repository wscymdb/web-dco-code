const Koa = require('koa')

// 创建app对象

const app = new Koa()

// 注册中间件
app.use((ctx, next) => {
  ctx.body = 123
})

app.listen(8888, () => {
  console.log('8888端口监听成功')
})
