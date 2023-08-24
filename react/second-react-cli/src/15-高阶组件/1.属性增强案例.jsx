import React, { PureComponent } from 'react'
import enhancedUserInfo from './hoc/enhanced_pops'

// props增强案例
// 只要使用enhancedUserInfo组件 都会自动注入一个name和age
const Home = enhancedUserInfo(function (props) {
  return (
    <div>
      <h1>Home</h1>
      <div>
        props:{props.name}--{props.age}--{props.level}
      </div>
    </div>
  )
})

const Page = enhancedUserInfo(
  class D extends PureComponent {
    render() {
      return (
        <div>
          <h1>page</h1>
          <div>
            props:{this.props.name}--{this.props.age}
          </div>
        </div>
      )
    }
  }
)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home level="199" />
        <Page />
      </div>
    )
  }
}
