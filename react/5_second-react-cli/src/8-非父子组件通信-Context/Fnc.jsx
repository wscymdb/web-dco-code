import React from 'react'
import { DemoCnotext } from './context/demo-context'

export default function Fnc() {
  return (
    <div>
      <h1>函数组件</h1>
      {/* 内部必须是一个回调函数 参数就是共享的数据 */}
      <DemoCnotext.Consumer>
        {(val) => <h2>获取共享数据:{val.name}</h2>}
      </DemoCnotext.Consumer>
    </div>
  )
}
