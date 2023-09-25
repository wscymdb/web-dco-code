import React, { memo, useContext } from 'react'
import { ThemeContext, UserContext } from './context'

const App = memo(() => {
  //如果 UserContext ThemeContext 传入的数据发生变化 那么当前组件也会重新渲染
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)
  return (
    <div>
      <h2>展示userContext的数据:{user.name}</h2>
      <h2>展示ThemeContext的数据:{theme.color}</h2>
    </div>
  )
})

export default App
