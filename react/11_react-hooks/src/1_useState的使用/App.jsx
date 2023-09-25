import React, { memo, useState } from 'react'

const App = memo(() => {
  const [message, setMessage] = useState('你好，次奥')

  function changeMsg() {
    setMessage('哇哈哈')
  }

  return (
    <div>
      <h1>APP:{message}</h1>
      <button onClick={changeMsg}>修改过文本</button>
    </div>
  )
})

export default App
