const { series, parallel } = require('gulp')

function foo1(cb) {
  setTimeout(() => {
    console.log('这是我的第一个gulp任务')
    cb()
  }, 2000)
}

function foo2(cb) {
  setTimeout(() => {
    console.log('这是foo2--gulp任务')
    cb()
  }, 3000)
}

//  默认任务
// exports.default = (cb) => {
//   console.log('这是默认任务 ')
//   cb()
// }

// 串行任务
const series1 = series(foo1, foo2)

// 并行任务
const parallel1 = parallel(foo1, foo2)
module.exports = {
  parallel1,
}
