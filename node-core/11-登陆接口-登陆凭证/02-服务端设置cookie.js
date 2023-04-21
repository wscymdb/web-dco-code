const Koa = require('koa')
const KoaRouter = require('@koa/router')

// 创建服务器
const app = new Koa()

// 注册路由
const userRouter = new KoaRouter({ prefix: '/users' })
userRouter.get('/login', (ctx, next) => {
  ctx.cookies.set('slogan', 'ikun', {
    maxAge: 15 * 1000, // 这里的时间时毫秒
  })
  ctx.body = '登陆成功'
})

userRouter.get('/list', (ctx, next) => {
  const slogan = ctx.cookies.get('slogan')
  console.log(slogan)
  ctx.body = 'list'
})

// 使用路由
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// 监听
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
