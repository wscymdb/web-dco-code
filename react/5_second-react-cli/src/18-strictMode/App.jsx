import React, { PureComponent, StrictMode } from 'react'
import Home from './Home'
import Product from './Product'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>app</h1>
        <StrictMode>
          <Home />
        </StrictMode>
        <Product />
      </div>
    )
  }
}
