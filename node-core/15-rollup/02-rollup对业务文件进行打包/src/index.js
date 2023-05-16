import { sum } from './util/math'
import { formatTime } from './util/format'
import './css/style.css'

import App from './vue/App.vue'
import { createApp } from 'vue'

function foo() {
  console.log('foo exection~')
  console.log(sum(1, 2))
  formatTime()
}

foo()

// dom操作
const titleEl = document.createElement('h1')
titleEl.className = 'style'

titleEl.textContent = '我是h1'

document.body.append(titleEl)

// 编写vue
const app = createApp(App).mount(document.querySelector('#app'))
