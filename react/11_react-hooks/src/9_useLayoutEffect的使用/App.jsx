import React, { memo, useEffect, useLayoutEffect, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(99)
  // 当内容显示到屏幕上之后执行，会阻塞DOM
  useLayoutEffect(() => {
    console.log('useLayoutEffect：我第二执行')
    if (count === 0) {
      setCount(Math.random() + 99)
    }
  }, [count])

  // 当内容显现到屏幕上之后才执行 不会阻塞DOM
  useEffect(() => {
    console.log('useEffect：我第三执行')
    if (count === 0) {
      setCount(Math.random() + 99)
    }
  }, [count])

  console.log('app render:我第一执行')

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={(e) => setCount(0)}>click</button>
    </div>
  )
})

export default App

// 下面案例 点击按钮设置count的值为0
// 如果在useEffect中进行判断  因为useEffect是在屏幕出现内容之后执行，所以会先设置成0，然后才设置成判断的值，会有一个闪烁的效果
// 如果在useLayoutEffect中判断， 因为useLayoutEffect是在屏幕出现内容之前执行，所以页面不会显示0，也不会有闪烁的效果
