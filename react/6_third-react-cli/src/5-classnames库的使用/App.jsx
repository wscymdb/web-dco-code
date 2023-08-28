import React, { PureComponent } from 'react'
import classnames from 'classnames'

export class App extends PureComponent {
  render() {
    return (
      <div>
        hhh
        <div className={classnames('aaa', { bbb: true }, { ccc: false })}></div>
      </div>
    )
  }
}

export default App
