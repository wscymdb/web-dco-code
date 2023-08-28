import React, { Component } from 'react'
import './index.css'
import propTypes from 'prop-types'

export class NavBar extends Component {
  render() {
    console.log(this.props.children)
    const { children } = this.props
    return (
      <div className="bar">
        <div className="left">{children[0]}</div>
        <div className="center">{children[1]}</div>
        <div className="right">{children[2]}</div>
      </div>
    )
  }
}
// 限制children的个数
NavBar.propTypes = {
  // 限制只允许传入一个内容
  // children:propTypes.element
  // 限制传入的内容要是多个
  children: propTypes.array,
}

export default NavBar
