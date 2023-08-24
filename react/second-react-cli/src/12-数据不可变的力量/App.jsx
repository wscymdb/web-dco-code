import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      friends: [
        { name: 'zs', age: 19 },
        { name: 'ls', age: 21 },
      ],
    }
  }

  addClick() {
    // 这里不能直接对friends进行更改，而是要先浅拷贝一层然后在操作
    // 不能直接 this.state.friends.push({ name: '王武', age: 25 })
    // 因为继承的是PureComponent 当数据发生变化的时候会和原来的值做比较
    // 直接push那么等于原来的值还是一样没有变化 所以不会触发render函数
    const newFriends = [...this.state.friends]
    newFriends.push({ name: '王武', age: 25 })
    this.setState({
      friends: newFriends,
    })
  }
  changeAge(idx) {
    const newF = [...this.state.friends]
    newF[idx].age = 32
    this.setState({
      friends: newF,
    })
  }
  render() {
    const { friends } = this.state
    return (
      <div>
        <h1>好友列表</h1>
        <ul>
          {friends.map((item, i) => (
            <li key={i}>
              {item.name}---{item.age}
            </li>
          ))}
        </ul>
        <button onClick={() => this.addClick()}>添加好友</button>
        <button onClick={() => this.changeAge(0)}>修改zs的年龄</button>
      </div>
    )
  }
}

export default App
