function loader(content, map, meta) {
  console.log('loader01:', content)

  return content
}
// loader.pitch = function () {
//   console.log('loader1')
// }
module.exports = loader
