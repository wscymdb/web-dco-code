import React, { memo } from 'react'
import { useUserToken } from './hooks'

const App = memo(() => {
  const [user, token] = useUserToken()
  return (
    <div>
      <h1>APP</h1>
      <h2>user:{user.name}</h2>
      <h2>token:{token.token}</h2>
    </div>
  )
})

export default App
