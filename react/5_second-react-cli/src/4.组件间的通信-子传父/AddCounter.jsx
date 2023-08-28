import React, { Component } from 'react'

export class AddCounter extends Component {
  addCount(v) {
    console.log(v)
    const { addCount } = this.props
    addCount(v)
  }
  render() {
    return (
      <div>
        <button onClick={() => this.addCount(1)}>+1</button>
        <button onClick={() => this.addCount(3)}>+3</button>
        <button onClick={() => this.addCount(8)}>+8</button>
      </div>
    )
  }
}

export default AddCounter
