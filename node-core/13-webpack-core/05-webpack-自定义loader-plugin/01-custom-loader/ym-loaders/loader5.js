const { validate } = require('schema-utils')
const loader1Schema = require('./schema/loader1Schema.json')

module.exports = function (content) {
  // 获取使用loader时使用的参数
  // 方式一：早期的时候需要使用loader-utils(webpack开发的)库来回去参数
  // 方式二：目前，可以直接通过this.getOptions方法获取
  const options = this.getOptions()

  validate(loader1Schema, options)

  console.log('options:', options)
  console.log('loader04:', content)

  return content
}
