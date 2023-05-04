import { sub, sum } from './utils/math'
// import './css/style.css'
import './utils/util'
import 'lodash'
import 'dayjs'
const message = 'hello world'

console.log(sum(1, 2))
// foo函数
const foo = () => {
  console.log('first')
}

function bar(q, w, e) {
  console.log(arguments[0])
}

foo()

const obj = {
  say() {
    return 'say'
  },
}

const h1El = document.createElement('h1')
h1El.textContent = '123'
h1El.className = 'title'

document.body.append(h1El)
