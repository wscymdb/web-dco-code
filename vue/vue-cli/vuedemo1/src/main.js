import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import directives from './directives'
import obj from 'utils/math'
console.log(obj)

createApp(App).use(store).use(router).use(directives).mount('#app')
