import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(10)
  const [message, setMessage] = useState('你好')

  // 只要页面渲染都会执行
  useEffect(() => {
    console.log('修改title')
  })

  // 依赖message 当message 变化才执行
  // 参数二是一个数组，可以依赖多个 eg:[message,counter]
  useEffect(() => {
    console.log('操作DOM')
  }, [message])

  // 不依赖任何，只有当组件加载的时候执行一次
  useEffect(() => {
    console.log('发送网络请求，获取服务器的数据')

    // 因为该useEffect不依赖任何，所以清除的effect也只会在当前组件被卸载时候执行
    return () => {
      console.log('组件被卸载时执行一次')
    }
  }, [])

  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
      <h2>当前msg：{message}</h2>
      <button onClick={(e) => setMessage('我很好')}>change msg</button>
    </div>
  )
})

export default App
