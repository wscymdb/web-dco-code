const fs = require('fs')

let index = 0

setInterval(() => {
  index++
  let text = `我是${index}号\r`
  fs.writeFile(
    './assets/c.txt',
    text,
    {
      flag: 'a+',
    },
    (err, d) => {
      if (err) return console.log(err)
      console.log('写入成功', d)
    }
  )
}, 500)
