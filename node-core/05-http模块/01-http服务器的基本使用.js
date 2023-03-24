const http = require('http')

// 创建一个http服务器
const server = http.createServer((req, res) => {
  // console.log(req)
  const data = {
    code: 0,
    msg: 'congratulation you',
    data: {
      name: 'zs',
      age: 18,
      sex: '男',
    },
  }
  res.end(JSON.stringify(data), 'utf-8')
})

// 监听端口
server.listen(3000, () => {
  console.log('3000端口监听成功')
})
