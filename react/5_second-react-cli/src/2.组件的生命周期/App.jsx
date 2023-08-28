import React from 'react'
import HelloWorld from './HelloWorld'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isShow: true,
    }
  }
  showMessage() {
    this.setState({
      isShow: !this.state.isShow,
    })
  }
  render() {
    const { isShow } = this.state
    return (
      <div>
        <button onClick={(e) => this.showMessage()}>show message</button>

        {isShow && <HelloWorld />}
        <h3>Hello World是程序员的第一个代码</h3>
      </div>
    )
  }
}
export default App
