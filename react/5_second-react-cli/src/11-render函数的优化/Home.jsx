import React, { Component } from 'react'

export class Home extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.count !== this.props.count) return true
    return false
  }
  render() {
    console.log('Home render')
    return (
      <div>
        <h2>Home:{this.props.count}</h2>
      </div>
    )
  }
}

export default Home
