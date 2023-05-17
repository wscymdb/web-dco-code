import { sum } from './util/math'
import { formatTime } from './ts/format'
import './css/style.css'
import './css/normal.less'
import App from './vue/App.vue'
import { createApp } from 'vue'

console.log('===>', sum(1, 19))
console.log(formatTime(new Date()))

const titleEl = document.createElement('h1')

titleEl.className = 'title'

titleEl.textContent = '我是陈哈哈'

document.body.append(titleEl)

const app = createApp(App)

app.mount(document.querySelector('#app'))
