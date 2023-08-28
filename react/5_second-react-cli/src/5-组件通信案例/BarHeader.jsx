import React, { Component } from 'react'

export class BarHeader extends Component {
  barClick(i) {
    this.props.changeBar(i)
  }
  render() {
    const { bars, currentIndex } = this.props
    return (
      <div className="bar">
        {bars.map((item, i) => (
          <div
            className={`${currentIndex === i ? 'active' : ''} bar-item`}
            key={item}
            onClick={() => this.barClick(i)}
          >
            {item}
          </div>
        ))}
      </div>
    )
  }
}

export default BarHeader
