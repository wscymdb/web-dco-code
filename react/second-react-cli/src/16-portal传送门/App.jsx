import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import Modal from './Modal'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>protal的使用</h1>
        {createPortal(<h2>我是h2</h2>, document.querySelector('#cym'))}

        {createPortal(
          <Modal>
            <h1>我是标题</h1>
            <p>我是内容</p>
          </Modal>,
          document.querySelector('#modal')
        )}
      </div>
    )
  }
}
