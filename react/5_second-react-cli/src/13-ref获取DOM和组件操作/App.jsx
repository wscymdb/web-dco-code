import React, { PureComponent, createRef } from 'react'
import Home from './Home'
import Fnc from './Fnc'

export default class App extends PureComponent {
  constructor() {
    super()
    this.titleRef = createRef()
    this.titleEl = null
    this.homeRef = createRef()
    this.fnRef = createRef()
  }
  getDOMH2() {
    // 通过ref获取 不推荐使用了
    // const el = this.refs.ddm
    //  console.log(el)

    // 通过createRef获取
    // console.log(this.titleRef.current)

    //
    console.log(this.titleEl)
  }

  getInstance() {
    console.log(this.homeRef.current.demo())
  }
  getInstanceFn() {
    console.log(this.fnRef.current)
  }
  render() {
    return (
      <div>
        {/* 1.ref方式获取 */}
        <h2 ref="ddm">我是h2</h2>
        <h2 ref={this.titleRef}>我是</h2>
        <h2 ref={(el) => (this.titleEl = el)}>我是大哥</h2>
        <button onClick={() => this.getDOMH2()}>获取DOM</button>
        <Home ref={this.homeRef} />
        <button onClick={() => this.getInstance()}>获取组件实例</button>
        <Fnc ref={this.fnRef} />
        <button onClick={() => this.getInstanceFn()}>获取函数组件DOM</button>
      </div>
    )
  }
}
