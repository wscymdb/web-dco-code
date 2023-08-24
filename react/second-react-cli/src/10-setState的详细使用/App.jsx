import React, { Component } from 'react'
import { flushSync } from 'react-dom'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Hellow World',
    }
  }
  changeText() {
    // 1.setState基本用法
    // this.setState({
    //   message: '你好，世界',
    // })

    // 2.setState用法二 传入回调函数
    // 好处一 可以在回调函数中编写对应的逻辑，这样内聚性会更强
    // 好处二 该回调中会传入两个参数 分别是当前实例的state 和 props  当然也可以通过this.state和this.props获取，只不过回调中可以直接获取不需要this
    // this.setState((state, props) => {
    //   return {
    //     message: '你好，世界',
    //   }
    // })

    // 3.setState默认是异步调用
    // 如果希望在数据更新完毕后拿到更新后的值可以在setState函数的第二个参数传入一个回调，当数据更新完毕后会调用这个回调
    this.setState({ message: '你好世界' }, () =>
      console.log(this.state.message)
    )
    // 这里获取的值 还是更改之前的值
    console.log(this.state.message)
  }

  changeText1() {
    flushSync(() => {
      this.setState({ message: '你好世界' })
    })
    console.log(this.state.message)
  }

  render() {
    const { message } = this.state
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={() => this.changeText()}>修改文本</button>
        <button onClick={() => this.changeText1()}>同步更新</button>
      </div>
    )
  }
}

export default App
