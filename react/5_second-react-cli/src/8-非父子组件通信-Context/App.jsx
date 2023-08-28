import React, { Component } from 'react'
import { DemoCnotext } from './context/demo-context'
import { UserContext } from './context/user-context'
import Home from './Home'
import Fnc from './Fnc'
export class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        {/* 2.包裹要共享数据的组件 传递共享数据 */}
        {/* 如果想要使用多个context 可以包裹context */}
        <UserContext.Provider value={{ nickName: '就发顺丰' }}>
          <DemoCnotext.Provider value={{ name: 'zs', age: 18 }}>
            <Home />
            <Fnc />
          </DemoCnotext.Provider>
        </UserContext.Provider>
      </div>
    )
  }
}

export default App
