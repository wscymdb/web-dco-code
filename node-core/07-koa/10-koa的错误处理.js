const Koa = require('koa')
const KoaRouter = require('@koa/router')

// 创建服务器
const app = new Koa()

// 注册路由
const userRouter = new KoaRouter({ prefix: '/users' })
userRouter.get('/', (ctx, next) => {
  const isAutho = false
  if (isAutho) {
    ctx.body = 'user get'
  } else {
    // 这里可以拿 创建服务的app对象 也可以拿ctx.app 他们俩是一样的
    // 但是如过每个路由对象被放在不同的文件夹中获取app还要传来传去，所以使用ctx.app方便
    // app本身是一个EventEmitter，所以可以发射自定义事件
    // 行业规范 错误的事件 发射error 当然可以不遵循
    // 要把当前的ctx传入 不然没法响应数据
    ctx.app.emit('error', -10001, ctx)
  }
})

// 真实开发中 可以把错误处理 单独抽到一个文件
// 那么就需要导出app 在处理错误文件中导入app
// 因为app是一个EventEmitter 所以可以监听事件
app.on('error', (code, ctx) => {
  const errCode = code
  let message = 'unknow error ~'
  switch (errCode) {
    case -10001:
      message = '未授权'
      break
  }
  ctx.body = {
    code: errCode,
    message,
  }
})

// 使用路由
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// 监听
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
