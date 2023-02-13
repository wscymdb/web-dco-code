import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Pinia from './store'
import 'normalize.css'
import './assets/css/index.less'

console.log(import.meta.env)
createApp(App).use(Router).use(Pinia).mount('#app')
