const express = require('express')
const multer = require('multer')

const app = express()

// 应用一个三方 的中间件处理文件上传
const upload = multer({
  // dest: './uploads', // 文件放的地址 但是文件没有后缀名

  // 用这种方式可以自定义后缀名
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './uploads')
    },
    filename(req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    },
  }),
})

// 编写中间件
// upload.single() 会返回一个中间件,处理但文件  参数是客户端文件对应的key   eg；avatar：files
app.post('/upload', upload.single('avatar'), (req, res, next) => {
  console.log(req.file)
  // 如果上传的既有文件又有字段 那么字段会被放入到req.body中
  console.log(req.body)
  res.end('文件上传成功')
})

// 监听端口
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
