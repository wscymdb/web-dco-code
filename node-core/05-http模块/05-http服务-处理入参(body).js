const http = require('http')
const url = require('url')

// 创建一个http服务器
const server = http.createServer((req, res) => {
  // 解析body类型的参数
  // body类型的参数本来就是请求头 请求体不会存在req中
  // req的本质就是stream的EventEmitter  所以可以有事件监听
  // body类型的参数是放在data事件里的

  // 设置编码格式
  req.setEncoding('utf-8')
  let data = null
  req.on('data', (res) => {
    console.log(res)
    // console.log(JSON.parse(res))
    data = JSON.parse(res)
  })
  req.on('end', () => {
    res.end(JSON.stringify(data))
  })
})

// 监听端口
server.listen(3000, () => {
  console.log('3000端口监听成功')
})
