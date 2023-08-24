import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class MainBanner extends Component {
  // 如果没有自己的数据要写可以直接 不行constructor
  // 父组件传入的数据会自动绑定到实例的props上
  // constructor(props) {
  //   super(props)
  //   this.state = {}
  // }

  //  props的默认值 从 ES2022 开始，你也可以在 React 类组件中将 defaultProps 声明为静态属性
  // static defaultProps = {
  //   title: '默认',
  // }
  render() {
    console.log(this.props)
    const { baaners, title } = this.props
    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {baaners.map((item, i) => (
            <li key={i}>{item.value}</li>
          ))}
        </ul>
      </div>
    )
  }
}
// 对传入的props进行验证
MainBanner.propTypes = {
  // 表示banners的值是array类型，且值是必要的
  baaners: PropTypes.array.isRequired,
}
MainBanner.defaultProps = {
  title: '我是默认值',
}
export default MainBanner
