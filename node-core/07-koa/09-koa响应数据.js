const Koa = require('koa')
const KoaRouter = require('@koa/router')
const fs = require('fs')

// 创建服务器
const app = new Koa()

// 注册路由
const userRouter = new KoaRouter({ prefix: '/users' })
userRouter.get('/', (ctx, next) => {
  let res = {
    code: 0,
    msg: 'success',
    data: null,
  }
  const readStream = fs.createReadStream('./uploads/a.png')

  ctx.type = 'image/png'
  ctx.body = readStream
})

// 使用路由
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// 监听
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
