import React, { Component } from 'react'
import Bus from './utils/eventBus'

export class HomeBaaner extends Component {
  prevClick() {
    Bus.emit('prevClick', '点击了上一个')
  }
  nextClik() {
    Bus.emit('nextClick', '点击了下一个')
  }
  render() {
    return (
      <div>
        <h1>Bar</h1>
        <button onClick={() => this.prevClick()}>上一个</button>
        <button onClick={() => this.nextClik()}>下一个</button>
      </div>
    )
  }
}

export default HomeBaaner
