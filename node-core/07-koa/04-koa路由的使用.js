const Koa = require('koa')
const KoaRouter = require('@koa/router')

const app = new Koa()

// 创建路由对象
// prefix 路由前缀 和express的 app.use('/users', userRouter)同理
const userRouter = new KoaRouter({ prefix: '/users' })

// 注册路由
userRouter.get('/', (ctx, next) => {
  ctx.body = 'users  get'
})
userRouter.delete('/:id', (ctx, next) => {
  ctx.body = 'users  delete'
})

// 使用路由 使用userRouter.routes() 将会返回所有注册的路由
app.use(userRouter.routes())

// koa中 当匹配不到请求的时候 都是会返回 not found的
// 但是对于没有注册的路由 也返回not found给开发者的提示不友好
// 用下面的方法 则会告诉用户错误的原因 Method Not Allowed
app.use(userRouter.allowedMethods())

app.listen(8888, () => {
  console.log('8888端口监听成功')
})
