module.exports = function (content) {
  console.log('loader04:', content)
  // 同步loader可以直接return内容给下一个loader
  // 也可以通过callbalck 返回内容 使用callback可以返回一个错误在控制台

  const callback = this.callback
  // 参数一：报错信息 无报错直接写null
  // 参数二：下个loader的入参
  callback(null, content + 'ccc')
  // return content
}
