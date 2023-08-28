import React, { PureComponent } from 'react'

export default class Modal extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <div>
        <div className="title">{children[0]}</div>
        <div className="main">{children[1]}</div>
      </div>
    )
  }
}
