const fs = require('fs')

// 创建文件夹
fs.mkdir('./ym', (err) => {
  if (err) return console.log(err)
})
