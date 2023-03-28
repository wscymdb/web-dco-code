const express = require('express')

const app = express()

// 将用户的接口定义在单独的路由对象中
// 每个路由都可以看作是一个迷你的app 可以使用app的方法（get\post...）
const userRouter = express.Router()
userRouter.get('/', (req, res, next) => {
  res.json('你好')
})
userRouter.delete('/:id', (req, res, next) => {})
userRouter.post('/', (req, res, next) => {})
userRouter.patch('/:id', (req, res, next) => {})

// 歌词路由
const lryicRouter = express.Router()
lryicRouter.get('/', (req, res, next) => {
  res.json('你好')
})
lryicRouter.delete('/:id', (req, res, next) => {})

//  使用路由
// 当path是users的时候才会执行userRouter中间件
app.use('/users', userRouter)
app.use('/lryic', lryicRouter)
// 监听端口
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
