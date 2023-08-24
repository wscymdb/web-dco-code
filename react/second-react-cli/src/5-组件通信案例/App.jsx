import React, { Component } from 'react'
import './app.css'
import BarItem from './BarItem'
import BarHeader from './BarHeader'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      bars: ['流行', '新款', '精选'],
      currentIndex: 0,
    }
  }
  changeBar(i) {
    this.setState({
      currentIndex: i,
    })
  }
  render() {
    const { bars, currentIndex } = this.state
    return (
      <div className="app">
        <BarHeader
          bars={bars}
          currentIndex={currentIndex}
          changeBar={(i) => this.changeBar(i)}
        />
        <BarItem content={bars[currentIndex]} />
      </div>
    )
  }
}

export default App
