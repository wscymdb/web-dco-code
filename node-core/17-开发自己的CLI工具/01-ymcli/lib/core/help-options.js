function helpOptions(program) {
  // 处理--version操作
  const version = require('../../package.json').version
  program.version(version, '-v -V --version') // 通过-v -V --version 都可以触发 --version效果

  // 增加其他的options选项
  program.option('--desc', 'a cli program~')

  // 参数一 是命令行后面跟的参数 -d --dest都是一样的 <dest>表示额外的参数 注意：<dest> 要和参数的最后一个同名  也就是 --dest <dest>  获取的时候通过dest来获取额外的参数
  // 参数二 输入--help 告诉 -d --dest 是干嘛的 一个描述
  program.option('-d --dest <dest>', 'a destination folder, eg: -d src/view')

  // 监听help  只能监听--help  而且需要在program.parse之前
  program.on('--help', () => {
    console.log('')
    console.log('others:')
    console.log('  xxx')
  })
}

module.exports = helpOptions
