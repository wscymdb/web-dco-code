import React, { PureComponent } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import './style.css'
import store from './store'
import About from './pages/About'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      counter: store.getState().counter.counter,
    }
    this.unsubscribe = null
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const { counter } = store.getState().counter
      this.setState({
        counter,
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe()
  }

  render() {
    const { counter } = this.state
    return (
      <div>
        <h2>App Counter:{counter}</h2>
        <div className="pages">
          <Home />
          <Profile />
          <About />
        </div>
      </div>
    )
  }
}

export default App
