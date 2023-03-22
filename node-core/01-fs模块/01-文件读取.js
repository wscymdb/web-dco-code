const fs = require('fs')
// 同步读取
const res1 = fs.readFileSync('./assets/a.txt', { encoding: 'utf-8' })
console.log(res1)
console.log('--------------------')

// 异步读取  callback
fs.readFile('./assets/a.txt', { encoding: 'utf-8' }, (err, data) => {
  if (err) return console.log(err)
  console.log(data)
  console.log('--------------------')
})

// 异步读取  promise
fs.promises.readFile('./assets/a.txt', { encoding: 'utf-8' }).then((res) => {
  console.log(res)
})
