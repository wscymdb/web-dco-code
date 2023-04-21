const express = require('express')
const httpProxyMiddleware = require('http-proxy-middleware')

const app = express()

const options = {
  target: 'http://localhost:8002',
  changeOrigin: true,
  ws: true,
  secure: true,
  pathRewrite: {
    '^/api': '',
  },
}
app.use(express.static('../client'))
app.use(
  '/api',
  httpProxyMiddleware.createProxyMiddleware(options),
  (req, res, next) => {
    next()
  }
)

// 监听端口
app.listen(8001, () => {
  console.log('8888端口监听成功')
})
