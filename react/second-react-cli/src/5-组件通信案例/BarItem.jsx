import React, { Component } from 'react'

export class BarItem extends Component {
  render() {
    const { content } = this.props
    return <div>{content}</div>
  }
}

export default BarItem
