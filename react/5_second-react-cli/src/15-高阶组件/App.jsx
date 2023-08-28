import React, { PureComponent } from 'react'

/**
 * 案例需求
 * 子组件要登录之后才能显示 否则显示请登录
 * 这时候可以使用高阶组件 在高阶组件中做逻辑判断  子组件中什么也不用做
 * 因为不只一个页面需要登录判断 这样代码容易管理
 */
export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isLogin: false,
    }
  }
  componentWillMount() {}
  render() {
    return <div>请看3个案例</div>
  }
}
