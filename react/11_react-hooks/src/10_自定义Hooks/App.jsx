import React, { memo } from 'react'
import { useLocalStroage } from './hooks/useLocalStroage'

// 需求 当点击按钮的时候要改变token的值同时要将新的token存入到localStorage中
// 点击avatar也是同样的操作
// 如果都写在组件中，太过于麻烦，所以可以抽到一个hook中
const App = memo(() => {
  const [token, setToken] = useLocalStroage('token')
  const [avatar, setAvatar] = useLocalStroage('avatar')
  return (
    <div className="app">
      <h1>APP</h1>
      <div>token:{token}</div>
      <button onClick={(e) => setToken(Date.now())}>设置token</button>
      <div>avatar:{avatar}</div>
      <button onClick={(e) => setAvatar(`http://www.${Date.now()}.com`)}>
        设置Avatar
      </button>
    </div>
  )
})

export default App
