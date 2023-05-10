function loader(content, map, meta) {
  console.log('loader01:', content)

  return content
}
// loader.pitch = function () {
//   console.log('loader2')
//   return '12332'
// }
module.exports = loader
