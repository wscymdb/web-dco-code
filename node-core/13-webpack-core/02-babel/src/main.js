import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { sum } from './ts/math'

// es6的语法

const message = 'hello  babel'

const foo = () => {
  console.log('foo function execute')
}

foo()

const obj = {
  name: 'zs',
  age: 123,
}

const { name, age } = obj

const nickname = 'jack'
console.log(nickname.includes('ck'))

console.log(sum(1, 2))
