import React, { Component } from 'react'
import AddCounter from './AddCounter'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 100,
    }
  }
  addCount(v) {
    console.log(v)
    this.setState({
      count: this.state.count + v,
    })
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <h1>{count}</h1>
        <AddCounter addCount={(v) => this.addCount(v)} />
      </div>
    )
  }
}

export default App
