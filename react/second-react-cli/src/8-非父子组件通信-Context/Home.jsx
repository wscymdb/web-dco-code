import React, { Component } from 'react'
import { DemoCnotext } from './context/demo-context'
import { UserContext } from './context/user-context'

export class Home extends Component {
  render() {
    // 4.使用共享数据
    console.log(this.context)
    return (
      <div>
        <h1>Home</h1>
        <UserContext.Consumer>
          {(val) => <h2>{val.nickName}</h2>}
        </UserContext.Consumer>
      </div>
    )
  }
}
// 3. 指定使用哪个context
Home.contextType = DemoCnotext

export default Home
