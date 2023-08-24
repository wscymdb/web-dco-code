import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: 'App Component',
    }
  }

  render() {
    return (
      <div>
        {/* 1.可以返回React元素 通过JSX编写的代码会被翻写成React.createElement，这就是React元素 */}
        <h1>{this.state.message}</h1>
        {/* 2.可以返回一个数组，数组里面可以是React元素或字符串，会将数组中的元素遍历然后展示 */}
        {[<h1 key={'1232'}>我是h1元素</h1>, '哈哈哈']}
        {/* 3.返回一个字符串/数字 */}
        sss{123}
        {/* 4.返回 */}
      </div>
    )
  }
}

export default App
