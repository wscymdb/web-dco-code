import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isShow: true,
    }
  }
  render() {
    const { isShow } = this.state
    return (
      <div>
        <CSSTransition
          in={isShow}
          timeout={1000}
          classNames="r"
          unmountOnExit={true}
          appear
          onEnter={(e) => console.log('开始进入动画')}
          onEntering={(e) => console.log('开始执行动画')}
          onEntered={(e) => console.log('结束进入动画')}
          onExit={(e) => console.log('开始退出动画')}
          onExiting={(e) => console.log('退出执行动画')}
          onExited={(e) => console.log('结束退出动画')}
        >
          <h1>云想衣裳花想容，春风拂剑露华浓</h1>
        </CSSTransition>

        <button onClick={(e) => this.setState({ isShow: !isShow })}>
          切换
        </button>
      </div>
    )
  }
}
