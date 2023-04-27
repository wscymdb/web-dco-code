import axios from 'axios'

const foo = () => {
  console.log(123)
}
foo()

const obj = { name: 'zs', age: 19 }

const { name, age } = obj

console.log(name, age)

axios.get('/').then((res) => {
  console.log(res)
})
