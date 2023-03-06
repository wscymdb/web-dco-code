import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Store from './store'
import Icons from './global/register-icons'
import 'normalize.css'
import './assets/css/index.less'

// 针对ElMessage 和ElLoading等组件引入样式(已使用插件自动导入，不用此方法)
// import 'element-plus/theme-chalk/el-message.css'
// import 'element-plus/theme-chalk/el-notification.css'

// console.log(import.meta.env)

// 先注册store 因为store里会动态加载路由
createApp(App).use(Store).use(Router).use(Icons).mount('#app')
