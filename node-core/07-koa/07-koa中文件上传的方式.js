const Koa = require('koa')
const KoaRouter = require('@koa/router')
const multer = require('@koa/multer')

// 创建服务器
const app = new Koa()

const formdata = new multer({ dest: './uploads' })

// 注册路由
const userRouter = new KoaRouter({ prefix: '/upload' })
userRouter.post('/', formdata.single('img'), (ctx, next) => {
  console.log(ctx.request.body)
  ctx.body = 'upload done'
})

// 使用路由
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// 监听
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
