const express = require('express')

const app = express()

// 编写中间件
app.get('/test', (req, res, next) => {
  // 返回数据的方式
  // res.end(),方法用的比较少
  //res.end('test api')

  // res.json(),用的做多
  // res.json({ code: 0, msg: 'success', data: 222 })

  // 用于设置http的状态吗
  res.status(200)
  res.end('创建用户成功')
})

// 监听端口
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
