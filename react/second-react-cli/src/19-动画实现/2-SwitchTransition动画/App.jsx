import React, { PureComponent } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import Home from './Home'
import Page from './Page'
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
        {/* 示例一 两个组件的切换 */}
        <SwitchTransition mode="out-in">
          <CSSTransition classNames="r" timeout={1000} key={isShow ? 1 : 2}>
            {isShow ? <Home /> : <Page />}
          </CSSTransition>
        </SwitchTransition>
        {/* 示例二 文字的切换 */}
        <SwitchTransition mode="out-in">
          {/* 只要key发生了变化即可 无论key是什么值 */}
          <CSSTransition classNames="r" timeout={1000} key={isShow ? 1 : 2}>
            <button onClick={(e) => this.setState({ isShow: !isShow })}>
              {isShow ? '退出' : '登录'}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}
