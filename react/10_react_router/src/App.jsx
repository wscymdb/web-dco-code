import React, { memo } from 'react'
import { Link, useRoutes } from 'react-router-dom'

import routes from './router'

const App = memo(function () {
  return (
    <div className="app">
      <div className="header">
        <nav>
          <Link to="/home"> to home</Link>
          <Link to="/about"> to about</Link>
        </nav>
      </div>
      <div className="main">{useRoutes(routes)}</div>
      <div className="footer">footer</div>
    </div>
  )
})
export default App
