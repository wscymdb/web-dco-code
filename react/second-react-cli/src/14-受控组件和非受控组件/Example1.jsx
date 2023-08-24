// 输入框
import React, { PureComponent } from 'react'

export default class Example1 extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: 'zs',
      password: '',
    }
  }

  handleInputChange(e, prop) {
    const keyName = e.target.name

    this.setState({
      [keyName]: e.target.value,
    })
  }
  handleRegistry(e) {
    // 阻止默认行为
    e.preventDefault()
  }
  render() {
    const { username, password } = this.state
    return (
      <div>
        {/*  */}
        <form action="">
          <label htmlFor="username">
            用户名：
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label htmlFor="password">
            用户名：
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <button type="submit" onClick={(e) => this.handleRegistry(e)}>
            注册
          </button>
        </form>
      </div>
    )
  }
}
