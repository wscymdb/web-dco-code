import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      fontSize: 10,
      objStyle: {
        color: 'green',
        backgroundColor: 'yellow',
      },
    }
  }
  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({ fontSize: this.state.fontSize + 2 })}
        >
          增加fontsize
        </button>
        <h1 style={{ color: 'red', fontSize: `${this.state.fontSize}px ` }}>
          我是哈哈哈
        </h1>
        <h2 style={this.state.objStyle}>我是奔波儿霸</h2>
      </div>
    )
  }
}
