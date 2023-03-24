const http = require('http')

// 使用http模块发起get请求
http.get('http://www.baidu.com', (res) => {
  // res是一个流
  res.on('data', (data) => {
    console.log(data.toString())
  })
})

const req = http.request(
  {
    method: 'POST',
    hostname: '127.0.0.1',
    port: 8000,
  },
  (res) => {
    res.on('data', (data) => {
      console.log(data.toString())
    })
  }
)
// 使用request  需要手动调用end  表示当前请求完成
req.end()
