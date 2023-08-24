import React, { Component } from 'react'
import Bus from './utils/eventBus'

export class Home extends Component {
  render() {
    return <div>Home</div>
  }
  prevClick(v) {
    console.log(this)
    console.log(v)
  }
  nextClick(v) {
    console.log(v)
  }

  componentDidMount() {
    // 这种方式调用才能正确的获取this 或者显示绑定this

    Bus.on('prevClick', (v) => this.prevClick(v))
    Bus.on('nextClick', this.nextClick)
  }
  componentWillUnmount() {
    Bus.off('prevClick', (v) => this.prevClick(v))
    Bus.off('nextClick', this.nextClick)
  }
}

export default Home
