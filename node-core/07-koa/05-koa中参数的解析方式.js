const Koa = require('koa')
const KoaRouter = require('@koa/router')
const bodyparser = require('koa-bodyparser')
const multer = require('@koa/multer')

// 创建服务器
const app = new Koa()

// 解析json类型和urlendoded类型的数据
app.use(bodyparser())

// 解析formdata类型数据
const formParser = multer()

// 注册路由
const userRouter = new KoaRouter({ prefix: '/users' })

// params
userRouter.get('/:id', (ctx, next) => {
  console.log(123)
  const id = ctx.params.id
  ctx.body = id
})

// query
userRouter.get('/', (ctx) => {
  const query = ctx.query
  console.log(query)
  ctx.body = JSON.stringify(query)
})

// json格式解析body的信息 需要借助中间件（koa-bodyparser）
userRouter.post('/', (ctx) => {
  // 数据在ctx.request.body中
  console.log(ctx.request.body)

  ctx.body = 123
})

// urlencoded格式解析信息 需要借助中间件（koa-bodyparser）
userRouter.post('/urlencoded', (ctx) => {
  // 数据在ctx.request.body中
  console.log(ctx.request.body)

  ctx.body = 234
})

// formdata格式的解析 需要借助中间件（@koa/multer和multer）
userRouter.post('/formdata', formParser.any(), (ctx) => {
  console.log(ctx.request.body)
  ctx.body = 345
})

// 使用路由
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// 监听
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
