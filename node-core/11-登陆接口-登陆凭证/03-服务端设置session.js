const Koa = require('koa')
const KoaRouter = require('@koa/router')
const koaSession = require('koa-session')

// 创建服务器
const app = new Koa()

// 注册路由
const userRouter = new KoaRouter({ prefix: '/users' })

//  设置session
app.use(
  koaSession(
    {
      key: 'sessionid',
      signed: true, // 进行加盐操作
      maxAge: 1000, // 单位ms
    },
    app
  )
)
// 加盐操作
// 设置此操作，会给客户端返回两个由session加密的cookie
// 一个是自己设置的，一个是加盐时候设置的
// 加盐的内容可以自定义，其实就是一种算法
app.keys = ['aaa', 'bbb', 'cccdsa']

userRouter.get('/login', (ctx, next) => {
  // 设置cookie
  ctx.session.slogan = 'ikun'
  ctx.body = '登陆成功'
})

userRouter.get('/list', (ctx, next) => {
  // 获取cookie
  const slogan = ctx.session.slogan
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
