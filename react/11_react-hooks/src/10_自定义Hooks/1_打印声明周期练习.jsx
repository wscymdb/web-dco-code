import React, { memo, useEffect, useState } from 'react'

// 要求：每个组件的渲染和销毁都要打印一下
// 要是写在每个组件中太麻烦，所以可以使用自定义Hook 这样每个组件只需要调用这个Hook即可
// 注意自定义Hook要以use开头
function useLifeCycle(cName) {
  useEffect(() => {
    console.log(`${cName}组件完成渲染`)
    return () => {
      console.log(`${cName}销毁`)
    }
  })
}

const Home = memo(() => {
  useLifeCycle('home')
  return <h2>Home</h2>
})

const App = memo(() => {
  const [toggle, setToggle] = useState(true)
  return (
    <div>
      <h1>APP</h1>
      {toggle ? <Home /> : null}
      <button onClick={(e) => setToggle(!toggle)}>toggle</button>
    </div>
  )
})

export default App
