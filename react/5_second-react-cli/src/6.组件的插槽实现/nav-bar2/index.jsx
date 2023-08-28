import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props
    return (
      <div className="bar">
        <div className="left">{leftSlot}</div>
        <div className="center">{centerSlot}</div>
        <div className="right">{rightSlot}</div>
      </div>
    )
  }
}

export default NavBar
