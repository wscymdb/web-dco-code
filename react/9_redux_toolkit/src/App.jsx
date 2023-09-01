import React, { PureComponent } from 'react'
import Home from './pages/Home'
import { connect } from 'react-redux'
import './style.css'
import About from './pages/About'
import Demo from './pages/Demo'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App counter:{this.props.count}</h1>
        <div className="container">
          <About />
          <Home />
          <Demo />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  count: state.counter.count,
})

export default connect(mapStateToProps)(App)
