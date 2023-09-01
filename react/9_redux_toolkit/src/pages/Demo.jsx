import React, { PureComponent } from 'react'
import { connect } from './../hoc/connect'

export class Demo extends PureComponent {
  render() {
    return (
      <div>
        <h3>用于测试手写connect</h3>
        <h4>store count:{this.props.count}</h4>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
})
export default connect(mapStateToProps)(Demo)
