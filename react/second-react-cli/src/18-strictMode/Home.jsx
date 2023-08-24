import React, { PureComponent } from 'react'

export default class Home extends PureComponent {
  // 严格模式中使用过时的钩子会报错
  componentWillMount() {}

  componentDidMount() {
    console.log('123')
    const a = this.refs.a
    console.log(a)
  }
  render() {
    return (
      <div>
        Home
        <div ref="a">dfasdf</div>
      </div>
    )
  }
}
