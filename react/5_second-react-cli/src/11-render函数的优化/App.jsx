import React, { PureComponent } from 'react'
import Home from './Home'
import Fnc from './Func'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      message: 'hello world',
      count: 0,
    }
  }

  changeText() {
    this.setState({
      message: 'hello world1',
    })
  }
  changeCount() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    console.log('App render')
    const { message, count } = this.state
    return (
      <div>
        <h2>{message}</h2>
        <button onClick={() => this.changeText()}>修改文本</button>
        <button onClick={() => this.changeCount()}>{count}</button>
        <Home count={count} />
        <Fnc />
      </div>
    )
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextState)
  //   if (
  //     nextState.message !== this.state.message ||
  //     nextState.count !== this.state.count
  //   )
  //     return true
  //   return false
  // }
}

export default App
