import React, { Component } from 'react'
import NavBar from './nav-bar'
import NavBar2 from './nav-bar2'
export class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <button>按钮</button>
          <h1>我是标题</h1>
          <i>斜体文字</i>
        </NavBar>
        <NavBar2
          leftSlot={<button>按钮2</button>}
          centerSlot="哈哈哈"
          rightSlot={123}
        />
      </div>
    )
  }
}

export default App
