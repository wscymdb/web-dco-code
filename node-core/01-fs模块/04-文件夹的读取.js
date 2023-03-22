const fs = require('fs')

// 读取文件夹
// fs.readdir(
//   './image',
//   {
//     // 当前文件的类型 如果为true  则返回的是一个Dirent类
//     // https://nodejs.org/docs/latest-v16.x/api/fs.html#class-fsdirent
//     withFileTypes: true,
//   },
//   (err, file) => {
//     if (err) return console.log(err)
//     console.log(file)

//     file.forEach((item) => {
//       // isDirectory 是否是文件夹
//       console.log(item.isDirectory())
//     })
//   }
// )

// 递归读取文件夹中所有的文件
function findFileInDirectory(dir) {
  fs.readdir(dir, { withFileTypes: true }, (err, files) => {
    if (err) return console.log(err)
    files.forEach((item) => {
      if (item.isDirectory()) {
        findFileInDirectory(`${dir}/${item.name}`)
      } else {
        console.log(`item是一个文件，${item.name}`)
      }
    })
  })
}

findFileInDirectory('./ym')
