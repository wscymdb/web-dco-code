const express = require('express')

const app = express()

app.use(express.json())

// 编写中间件
app.post('/test', (req, res, next) => {
  const { username, password } = req.body
  if (!username || !password) {
    next(-1001)
  } else {
    res.end('test api')
  }
})

// 使用错误处理的中间件
// err 是当调用next传入的参数
app.use((err, req, res, next) => {
  const code = err
  let message = 'unknow error'
  switch (code) {
    case -1001:
      message = '没有输入用户名或密码'
      break
    case -1002:
      message = '用户名或密码错误'
      break
  }
  res.json({
    code,
    msg: message,
  })
})
// 监听端口
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
