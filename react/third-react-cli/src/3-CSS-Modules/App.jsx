import React, { PureComponent } from 'react'
import appSyle from './App.module.css'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <div className={appSyle['title-1']}>我是标题</div>
      </div>
    )
  }
}

export default App
