import React, { PureComponent } from 'react'
import withTheme from './hoc/with_theme'
class Product extends PureComponent {
  render() {
    const { color, size } = this.props
    return (
      <div>
        <h3>
          props:{color}---{size}
        </h3>
      </div>
    )
  }
}
export default withTheme(Product)
