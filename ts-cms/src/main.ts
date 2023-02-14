import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Pinia from './store'
import { registerIcons } from './global/register-icons'
import 'normalize.css'
import './assets/css/index.less'

// 针对ElMessage 和ElLoading等组件引入样式(已使用插件自动导入，不用此方法)
// import 'element-plus/theme-chalk/el-message.css'
// import 'element-plus/theme-chalk/el-notification.css'

// console.log(import.meta.env)

createApp(App).use(Router).use(Pinia).use(registerIcons).mount('#app')
