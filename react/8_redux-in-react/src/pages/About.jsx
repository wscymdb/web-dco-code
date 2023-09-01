import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { createAddAction, createSubAction } from '../store/counter'

export class About extends PureComponent {
  handleClick(num) {
    if (num > 0) {
      this.props.addCount(num)
    } else {
      this.props.subCount(num)
    }
  }
  render() {
    return (
      <div>
        <h2>About count:{this.props.counter}</h2>
        <div>
          <button onClick={(e) => this.handleClick(+66)}>+66</button>
          <button onClick={(e) => this.handleClick(-66)}>-66</button>
        </div>
        <div className="banners">
          <h3>store的banners数据</h3>
          <ul>
            {this.props.banners.map((item) => (
              <li key={item.acm}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

// 想要使用store中state的哪些参数
const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners,
})

// 派发action的函数
const mapDispatchToProps = (dispatch) => ({
  addCount: (num) => dispatch(createAddAction(num)),
  subCount: (num) => dispatch(createSubAction(num)),
})
export default connect(mapStateToProps, mapDispatchToProps)(About)
