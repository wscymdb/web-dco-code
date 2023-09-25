import React, { memo, useCallback, useRef, useState } from 'react'

const YMIncrement = memo((props) => {
  console.log('YMIncrement渲染了')
  return (
    <div>
      <button onClick={props.increment}>YMIncrement+1</button>
    </div>
  )
})

const App = memo(() => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('hello')

  // 未被优化的函数
  // const increment = () => {
  //   setCount(count + 1)
  // }

  // 使用useCallback优化的函数
  // const increment = useCallback(
  //   function foo() {
  //     console.log(count)
  //     setCount(count + 1)
  //   },
  //   [count]
  // )

  // 虽然可以使用添加依赖的方式解决 必包陷阱问题
  // 但是当改变count foo还是会多次定义
  // 使用 useRef解决
  // useRef，在组件多次渲染时，返回的是同一个值
  const countRef = useRef()
  countRef.current = count
  const increment = useCallback(function foo() {
    console.log(countRef.current)
    setCount(countRef.current + 1)
  }, [])

  const changeMessage = () => {
    setMessage(Math.random())
  }

  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={(e) => increment()}>+1</button>
      <YMIncrement increment={increment} />
      <h2>message:{message}</h2>
      <button onClick={(e) => changeMessage()}>change message</button>
    </div>
  )
})

export default App

// useCallback性能优化点
// 1.当需要将一个函数传递给子组件时，最好使用useCallback进行优化，将优化后的函数，传递给子组件

// 解析
// 看下面案例
// 当点击加一操作之后，count进行了更新 重新执行了app组件完成重新渲染 这时<YMIncrement>子组件接收了increment函数，所以也会重新渲染一次，这都是正常的 因为app组件重新渲染了 所以increment函数又被重新定义了一次 子组件接收到新的参数所以也会重新渲染

// 当点击change message按钮之后 改变了message  此时子组件也会被重新渲染 道理和上面一样 因为message发生了变化 所以app重新渲染 increment函数重新定义 子组件拿到新的参数又会被重新渲染

// 但是这样是有损性能的 子组件依赖的是count相关的 并不是message相关的 所以当message变化不应该去影响这个子组件  这个案例中没有那么复杂 所以性能看不出有啥损耗 如果真是开发中有100个子组件都需要使用这个函数那么这100个子组件都会渲染，就会影响很大了

// 使用useCallback对increment进行优化，他依赖count，只有count变化导致的重新渲染才会使得increment的回调foo重新定义，否则就会使用之前定义的，这时因为increment没有被重新定义，所以子组件不会重新渲染

// 必包陷阱问题
// 现在如果我们将代码写成下面这样，increment表示不依赖任何，即，即使页面重新渲染 increment中的foo也不会被重新定义(解决了一个函数不会被重复定义问题？？)  但是会有问题 +1的时候count变成1之后就不会累加了
// 原因是 因为不依赖任何 所以 传入的回调foo就不会被再次定义 当点击+1 app渲染 但是foo不会被重新定义   虽然这次更新后count已经变成了1 但是foo内部的count是0 他引用的依旧是第一次app的count，0，所以就是点击很多次+1 foo内部的count依然是0  所以页面上count永远是0+1 =1

// ;```js
// const increment = useCallback(function foo() {
//   console.log(count)
//   setCount(count + 1)
// }, [])
// ```

// 所以使用useCallback的时候添加一个依赖 当依赖发生变化 useCallback的回调会被重新定义
// 所以说useCallback并不是让函数只定义一次这个浅薄且有误的理解
