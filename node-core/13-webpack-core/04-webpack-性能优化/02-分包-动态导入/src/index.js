const message = '我是indexjs的文件'
console.log(message)

const btn = document.createElement('button')
btn.textContent = '加载a文件'

document.body.append(btn)

btn.onclick = () => {
  // 添加魔法注释 在对分包命名的时候的name就是我们的魔法注释名
  import(/*webpackChunkName:'哈哈router'*/ './router/a')
}
