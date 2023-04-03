const Koa = require('koa')
const KoaRouter = require('@koa/router')
const static = require('koa-static')

// 创建服务器
const app = new Koa()

// 设置静态资源
app.use(static('./uploads'))

// 注册路由
const userRouter = new KoaRouter({ prefix: '/users' })
userRouter.get('/', (ctx, next) => {
  ctx.body = 'user get'
})

// 使用路由
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// 监听
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
