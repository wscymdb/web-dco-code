import React, { PureComponent } from 'react'
import store from '../store'
import { createAddAction, createSubAction } from '../store/counter'
export class Home extends PureComponent {
  constructor() {
    super()
    this.state = {
      // 初始化store中的值
      counter: store.getState().counter.counter,
    }
    this.unsubscribe = null
  }

  componentDidMount() {
    // 订阅store中的变化
    this.unsubscribe = store.subscribe(() => {
      const { counter } = store.getState().counter
      console.log('counter', counter)
      this.setState({
        counter,
      })
    })
  }

  componentWillUnmount() {
    // 取消订阅
    this.unsubscribe && this.unsubscribe()
  }

  handleClick(num) {
    const action = num > 0 ? createAddAction(num) : createSubAction(num)
    store.dispatch(action)
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>Home Counter:{counter}</h2>
        <div>
          <button onClick={(e) => this.handleClick(-1)}>-1</button>
          <button onClick={(e) => this.handleClick(3)}>+3</button>
          <button onClick={(e) => this.handleClick(5)}>+5</button>
        </div>
      </div>
    )
  }
}

export default Home
