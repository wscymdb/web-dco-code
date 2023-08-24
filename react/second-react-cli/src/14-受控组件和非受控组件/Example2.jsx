// 单选和多选

import React, { PureComponent } from 'react'

export default class Example2 extends PureComponent {
  constructor() {
    super()
    this.state = {
      agree: true,
      hobbies: [
        { label: '唱', value: 'sing', checked: true },
        { label: '跳', value: 'dance', checked: false },
        { label: 'rap', value: 'rap', checked: false },
      ],
    }
  }
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.checked,
    })
  }

  handleCheckedChange(e, idx) {
    const newHobbies = [...this.state.hobbies]
    newHobbies[idx].checked = e.target.checked
    this.setState({ hobbies: newHobbies })
  }
  handleSubmit() {
    const hobbiesChecked = this.state.hobbies
      .filter((item) => item.checked)
      .map((item) => item.value)
    console.log(hobbiesChecked)
  }
  render() {
    const { agree, hobbies } = this.state
    return (
      <div>
        <label htmlFor="agree">
          同意协议
          <input
            id="agree"
            name="agree"
            type="checkbox"
            checked={agree}
            onChange={(e) => this.handleInputChange(e)}
          />
        </label>

        <div>
          你的爱好：
          {hobbies.map((item, i) => (
            <label htmlFor={item.value} key={item.value}>
              <input
                type="checkbox"
                id={item.value}
                name={item.value}
                checked={item.checked}
                onChange={(e) => this.handleCheckedChange(e, i)}
              />
              {item.label}
            </label>
          ))}
        </div>
        <button onClick={() => this.handleSubmit()}>获取hobbies</button>
      </div>
    )
  }
}
