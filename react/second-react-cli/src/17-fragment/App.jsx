import React, { Fragment, PureComponent } from 'react'

export default class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <h2>woshi hhh</h2>
        {/* 这中写法是<Fragment>的语法糖 */}
        <>
          <h3>woshi</h3>
        </>
      </Fragment>
    )
  }
}
