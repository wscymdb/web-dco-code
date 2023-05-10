module.exports = function (content) {
  console.log('loader03:', content)

  // 方式一
  // 异步loader 调用this.async()函数告诉后面的loader等待
  const callback = this.async()
  setTimeout(() => {
    // 第一参数是错误信息 如果没有写null即可
    //第二个参数是下一个loader的入参
    callback(null, content + 'aaa')
  }, 2000)

  // 方式二
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     if (true) reject('错了错了')
  //     resolve(content + 'aaa')
  //   }, 2000)
  // })
}
