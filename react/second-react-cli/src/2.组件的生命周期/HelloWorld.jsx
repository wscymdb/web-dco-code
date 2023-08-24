import React from 'react'
class HelloWorld extends React.Component {
  constructor() {
    console.log('helloWorld constructor')
    super()
    this.state = {
      message: 'Hello World',
    }
  }

  changeText() {
    this.setState({
      message: '你好,世界',
    })
  }
  render() {
    console.log('helloWorld render')
    const { message } = this.state
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={() => this.changeText()}>更改文本</button>
      </div>
    )
  }

  componentDidMount() {
    console.log('helloWorld componentDidMount')
  }
  componentDidUpdate() {
    console.log('helloWorld componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('helloWorld componentWillUnmount')
  }
}
export default HelloWorld
