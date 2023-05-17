// vite原生支持es module 所以这里可以使用es module的导入导出
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})

// 上面的导出和下面的导出作用一样，唯一的区别是，上面的写属性会有代码提示
// export default {
//   plugins: [vue()],
// }
