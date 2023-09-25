import React, { memo } from 'react'
import './style.css'
import { useScrollPosition } from './hooks'

const App = memo(() => {
  const [scrollX, scrollY] = useScrollPosition()
  return (
    <div className="app">
      <h1>APP</h1>
      <div className="fixed">
        <h2>
          X:{scrollX},Y:{scrollY}
        </h2>
      </div>
    </div>
  )
})

export default App
