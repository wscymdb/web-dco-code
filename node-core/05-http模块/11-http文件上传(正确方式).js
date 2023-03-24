const http = require('http')
const fs = require('fs')

// 下面的方式的本质就是 拿到客户端传入的数据 将非图片的数据摘出去 只留下图片相关的数据进行保存
//了解即可  正式开发中框架都帮我们封装好了

// 创建一个http服务器
const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  // 设置编码格式  binary不是转为二进制  而是使用ISO-8859-1 进行编码
  req.setEncoding('binary')
  //bounary 客户端请求的时候自动生成的
  const bounary = req.headers['content-type'].split('=')[1]

  let formData = ''
  req.on('data', (data) => {
    formData += data
  })
  req.on('end', () => {
    let imgType = 'image/png'
    formData = formData
      .substring(formData.indexOf(imgType) + imgType.length)
      .replace(/^\s\s*/, '')
    formData = formData.substring(0, formData.indexOf(`--${bounary}--`))
    //写入文件 用binary编码方式进行写入
    fs.writeFile('./a.png', formData, 'binary', () => {
      console.log('图片上传完成')

      res.end('file success')
    })
  })
})
// 监听端8
server.listen(8080, () => {
  console.log('8080端口监听成功')
})
