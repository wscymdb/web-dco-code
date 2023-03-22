// 1.创建一个buffer
// const buf = new Buffer('hello')

// console.log(buf)

const buf2 = Buffer.from('world')
console.log(buf2)

// 计算机中  一个中文(生僻字除外) 占3个字节
const buf3 = Buffer.from('你', 'utf16le')
console.log(buf3)
console.log(buf3.toString('utf16le'))
