const { src, dest, watch } = require('gulp')
const babel = require('gulp-babel')
const terser = require('gulp-terser')

const jsTask = () => {
  return src('./src/**/*.js')
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(terser({ mangle: { toplevel: true } }))
    .pipe(dest('./dist'))
}

// 监听文件的变化，自动调用任务
// 避免改动某个文件 再手动执行任务
watch('./src/**/*.js', jsTask)

module.exports = {
  jsTask,
}
