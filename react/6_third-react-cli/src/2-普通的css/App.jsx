import React, { PureComponent } from 'react'
import './App.css'
import Home from './Home'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <div className="cbd">我是App</div>
        <Home />
      </div>
    )
  }
}

export default App
