import React, { memo, useRef } from 'react'

const App = memo(() => {
  const titleRef = useRef()

  return (
    <div>
      <h2 ref={titleRef}>Hello 拿捏</h2>
      <button onClick={(e) => console.log(titleRef.current)}>查看dom</button>
    </div>
  )
})

export default App
