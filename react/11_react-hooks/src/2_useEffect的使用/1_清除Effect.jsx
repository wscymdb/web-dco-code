import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(10)

  useEffect(() => {
    // 当组件渲染完毕后会执行这个回调
    document.title = counter
    console.log('添加订阅')

    // 如果返回一个回调 那么每次更新和卸载的时候都会调用这个回调
    // 可以在这个清除函数中做一些取消订阅/取消监听的操作
    return () => {
      console.log('取消订阅')
    }
  })

  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
    </div>
  )
})

export default App
