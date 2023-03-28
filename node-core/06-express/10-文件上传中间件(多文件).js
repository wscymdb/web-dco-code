const express = require('express')
const multer = require('multer')

const app = express()

// 应用一个三方 的中间件处理文件上传
const upload = multer({
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
// 上传单文件
// upload.single() 会返回一个中间件,处理但文件  参数是客户端文件对应的key   eg；avatar：files
app.post('/upload', upload.single('avatar'), (req, res, next) => {
  console.log(req.file)
  res.end('文件上传成功')
})

// 上传多文件
app.post('/photos', upload.array('photos'), (req, res, next) => {
  console.log(req.files)
  res.end('上传多张照片完成')
})

// 监听端口
app.listen(8888, () => {
  console.log('8888端口监听成功')
})
