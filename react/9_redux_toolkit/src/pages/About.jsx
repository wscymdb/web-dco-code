import React, { PureComponent } from 'react'

import { connect } from 'react-redux'
import { addNumber } from '../store/features/counter'

export class About extends PureComponent {
  handleClick(num) {
    this.props.addNumber(num)
  }
  render() {
    return (
      <div>
        <h2>About counter:{this.props.count}</h2>
        <button onClick={(e) => this.handleClick(1)}>+1</button>
        <button onClick={(e) => this.handleClick(3)}>+3</button>
        <button onClick={(e) => this.handleClick(8)}>+8</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
})
const mapDispatchToProps = (dispatch) => ({
  addNumber: (num) => dispatch(addNumber(num)),
})
export default connect(mapStateToProps, mapDispatchToProps)(About)
