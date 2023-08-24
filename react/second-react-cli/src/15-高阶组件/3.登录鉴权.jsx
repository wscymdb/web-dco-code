import React, { PureComponent } from 'react'
import Cart from './Cart'

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
  handleLogin() {
    window.localStorage.setItem('token', 'djjfdskfsdfksdfjfiqeir')
    // 可以修改state的变量 让render执行
    this.setState({
      isLogin: true,
    })

    // 因为我们没有修改state中的数据 所以render函数不会执行 这时候需要调用方法 让render强制刷新 不推荐这种 推荐修改state让页面刷新
    // this.forceUpdate()
  }
  render() {
    return (
      <div>
        <Cart />
        <button onClick={() => this.handleLogin()}>登录</button>
      </div>
    )
  }
}
