import React from 'react'
import HelloWorld from './components/HelloWorld'

// 编写一个组件
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: 'hello react',
    }
  }

  render() {
    const { message } = this.state
    return (
      <div>
        <h1>{message}</h1>
        <HelloWorld />
      </div>
    )
  }
}

export default App
