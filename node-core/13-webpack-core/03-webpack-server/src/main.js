import 'core-js/stable'

import 'regenerator-runtime/runtime'

const foo = () => {
  console.log(123)
}
foo()

const obj = { name: 'zs', age: 19 }

const { name, age } = obj

const str = 'jack'

console.log(str.includes('ck'))

fetch('/api').then((res) => {
  console.log(res)
})
