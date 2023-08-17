import React from 'react'

class HelloWorld extends React.Component {
  constructor() {
    super()
    this.state = {
      message: '你好，章三',
    }
  }

  render() {
    const { message } = this.state
    return (
      <div>
        <h1>{message}</h1>
      </div>
    )
  }
}

export default HelloWorld
