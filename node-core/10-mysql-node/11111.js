const mysql = require('mysql2')

const Koa = require('koa')
const KoaRouter = require('@koa/router')

// 创建服务器
const app = new Koa()

// 建立连接
const connection = mysql.createConnection({
  host: 'localhost',
  database: 'jack',
  port: 3306,
  user: 'root',
  password: 'qwerty123',
})

// 注册路由
const userRouter = new KoaRouter({ prefix: '/users' })
userRouter.get('/', async (ctx, next) => {
  const [value] = await connection.promise().query(`select * from t_songs`)
  ctx.body = value
})

// 使用路由
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// 监听
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
