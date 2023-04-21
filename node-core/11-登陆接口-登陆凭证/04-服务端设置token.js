const Koa = require('koa')
const KoaRouter = require('@koa/router')
const jwt = require('jsonwebtoken')

// 创建服务器
const app = new Koa()
const secretKey = 'wssb'
// 注册路由
const userRouter = new KoaRouter({ prefix: '/users' })

userRouter.get('/login', (ctx, next) => {
  // 颁发token
  const token = jwt.sign({ name: '只能' }, secretKey, {
    expiresIn: 1000, // 单位时s
  })
  ctx.body = {
    code: 0,
    token,
    msg: '登陆成功',
  }
})

userRouter.get('/list', (ctx, next) => {
  // 验证token
  try {
    const authorization = ctx.header.authorization
    const verify = jwt.verify(authorization, secretKey)
    console.log(verify)
    ctx.body = verify
  } catch (error) {
    ctx.body = error
  }
})

// 使用路由
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// 监听
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
