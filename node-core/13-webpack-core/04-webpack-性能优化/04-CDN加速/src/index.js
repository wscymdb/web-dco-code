import http from 'axios'
import _ from 'lodash'

const message = '我是indexjs的文件'
console.log(message)

const btn1 = document.createElement('button')
btn1.textContent = '加载a文件'

document.body.append(btn1)

const btn2 = document.createElement('button')
btn2.textContent = '加载b文件'

document.body.append(btn2)

btn1.onclick = () => {
  // 添加魔法注释 在对分包命名的时候的name就是我们的魔法注释名
  import(/*webpackChunkName:'a-router'*/ /*webpackPrefetch:true*/ './router/a')
}

import(/*webpackChunkName:'b-router'*/ /*webpackPreload:true*/ './router/b')

btn2.onclick = () => {
  // 添加魔法注释 在对分包命名的时候的name就是我们的魔法注释名
  // import(/*webpackChunkName:'b-router'*/ /*webpackPreload:true*/ './router/b')
}
http.get('/').then((res) => {
  console.log(res)
})
