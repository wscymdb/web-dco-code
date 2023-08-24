import React, { PureComponent } from 'react'
import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'
import Example4 from './Example4'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>组件是否受控</h1>
        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
      </div>
    )
  }
}
