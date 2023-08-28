//  非受控组件

import React, { PureComponent, createRef } from 'react'

export default class Example4 extends PureComponent {
  constructor() {
    super()
    this.state = {
      intr: 'hhh',
    }
    this.iptRef = createRef()
  }

  handleClick(e) {
    // 获取非受控组件的值
    console.log(this.iptRef.current.value)
  }
  componentDidMount() {
    // 在这个生命周期中设置事件监听
    this.iptRef.current.addEventListener('input', () => {
      console.log(1)
    })
  }
  render() {
    return (
      <div>
        <h3>非受控组件</h3>
        <input type="text" ref={this.iptRef} defaultValue={this.state.intr} />
        <button onClick={(e) => this.handleClick(e)}>click me </button>
      </div>
    )
  }
}
