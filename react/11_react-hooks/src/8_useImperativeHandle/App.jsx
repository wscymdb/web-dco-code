import React, { forwardRef, memo, useImperativeHandle, useRef } from 'react'

const YMIpt = memo(
  forwardRef((props, ref) => {
    const iptRef = useRef()

    useImperativeHandle(ref, () => {
      return {
        focus() {
          // 操作自己的input
          iptRef.current.focus()
        },
      }
    })

    return (
      <div>
        <input ref={iptRef} type="text" />
      </div>
    )
  })
)

const App = memo(() => {
  const iptRef = useRef()

  function handleClick() {
    //
    iptRef.current.focus()
    // 无效的操作 子组件没提供该方法
    iptRef.current.value = ''
  }
  return (
    <div>
      <YMIpt ref={iptRef} />
      <button onClick={handleClick}>操作DOM</button>
    </div>
  )
})

export default App

// 如下案例场景是， 父组件想要操作子组件的input框，父组件拿到子组件input元素后可以做任何操作，但是子组件却希望父组件只能做获取焦点事件
// 这时候就需要借助useImperativeHandle，useImperativeHandle返回的是一个对象，父组件操作的实际是这个返回的对象，父组件只能操作该对象中有的方法
