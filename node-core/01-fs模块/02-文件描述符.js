const fs = require('fs')

// 为什么不直接打开文件，而要拿到文件的操作符再打开文件，多此一举？
// fs.readFile只能读取文件的内容，但是却读取不到文件的信息(大小、创建时间...)
fs.open('./assets/b.txt', (err, fd) => {
  // 拿到文件的描述符
  console.log(fd)

  // 读取文件的信息
  fs.fstat(fd, (err, stats) => {
    if (err) return

    console.log(stats)

    // 手动关闭文件(虽然进程结束也会关闭当前文件，但是要养成良好习惯)
    fs.close()
  })
})
