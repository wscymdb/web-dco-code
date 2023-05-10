const { marked } = require('marked')
const hljs = require('highlight.js')
/**
 * 解析.md结尾的文件
 * @param {入参} content
 * @returns 资源文件内容
 */

module.exports = function (content) {
  // 将maked解析md的时候将关键字高亮标记
  marked.setOptions({
    highlight: function (code, lang) {
      return hljs.highlight(lang || 'javascript', code).value
    },
  })

  // 使用三方库解析md文档
  const htmlContent = marked(content)

  // webpack规定输出的结果必须是模块
  // 模块化输出的内容
  const transContent = '`' + htmlContent + '`'
  const moduleContent = `var code = ${transContent}; export default code`

  return moduleContent
}
