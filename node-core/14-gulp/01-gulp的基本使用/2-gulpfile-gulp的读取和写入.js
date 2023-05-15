const { src, dest } = require('gulp')

// 复制文件
//  src, dest返回的是一个流 也用于结束当前任务
function copyFile(cb) {
  return src('./src/**/*.js').pipe(dest('./dist'))
}

module.exports = {
  copyFile,
}
