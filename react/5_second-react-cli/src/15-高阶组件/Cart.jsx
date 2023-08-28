import React, { PureComponent } from 'react'
import loginAuth from './hoc/login_auth'

class Cart extends PureComponent {
  render() {
    return (
      <div>
        <h1>这是购物车页面</h1>
      </div>
    )
  }
}
export default loginAuth(Cart)
