const message = 'hello world'

// foo函数
const foo = () => {
  console.log('first')
}

function bar(q, w, e) {
  console.log(arguments[0])
}
bar(1, 2, 3)

foo()

const obj = {
  say() {
    return 'say'
  },
}

// 不可达的代码  永远不会执行的代码

if (false) {
  console.log(12312323)
}

class Person {}

// 命令行命令
// npx terser main.js -o main.min.js -c arrows=true,arguments=true -m toplevel=true,keep_fnames=true,,keep_classnames=true
