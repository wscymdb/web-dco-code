import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProduct from './MainProduct'

export class main extends Component {
  constructor() {
    super()

    this.state = {
      baaners: ['广告一', '广告二', '广告三'],
    }
  }
  async initData() {
    console.log(this)
    const data = await fetch('http://124.221.241.135:8888/list')
    const res = await data.json()
    this.setState({
      baaners: res.data,
    })
  }
  componentDidMount() {
    this.initData()
  }
  render() {
    const { baaners } = this.state
    return (
      <div>
        <MainBanner baaners={baaners} />
        <MainProduct />
      </div>
    )
  }
}

export default main
