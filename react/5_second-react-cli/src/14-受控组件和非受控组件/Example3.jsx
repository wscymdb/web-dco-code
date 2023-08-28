// select框
import React, { PureComponent } from 'react'

export default class Example3 extends PureComponent {
  constructor() {
    super()
    this.state = {
      fruit: 'banner',
      phones: [],
    }
  }

  handleSingleChange(e) {
    console.log(e)
    this.setState({
      fruit: e.target.value,
    })
  }

  handleMultiple(e) {
    // const options = [...e.target.selectedOptions]
    // const values = options.map((item) => item.value)

    const values = Array.from(e.target.selectedOptions, (item) => item.value)

    this.setState({
      phones: values,
    })
  }
  render() {
    const { fruit, phones } = this.state
    return (
      <div>
        <h3>水果单选</h3>
        <select
          name="fruit"
          id="fruit"
          value={fruit}
          onChange={(e) => this.handleSingleChange(e)}
        >
          <option value="apple">苹果</option>
          <option value="banner">香蕉</option>
          <option value="orange">橘子</option>
        </select>

        <h3>手机多选</h3>
        <select
          name="phone"
          id="phone"
          multiple
          value={phones}
          onChange={(e) => this.handleMultiple(e)}
        >
          <option value="xiaomi">小米</option>
          <option value="oppo">oppo</option>
          <option value="vivo">vivo</option>
          <option value="apple">apple</option>
        </select>
      </div>
    )
  }
}
