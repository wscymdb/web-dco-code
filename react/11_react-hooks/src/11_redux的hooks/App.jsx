import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { addNumberAction } from './store/features/counter'

const Home = memo(() => {
  console.log('Home render')
  const { message } = useSelector(
    (state) => ({
      message: state.counter.message,
    }),
    shallowEqual
  )
  return (
    <div>
      <h2>Home:{message}</h2>
    </div>
  )
})

const App = memo(() => {
  // 1.使用useSelector将redux中store的数据映射到组件内部
  const { count } = useSelector(
    (state) => ({
      // state是store的state
      count: state.counter.counter,
    }),
    shallowEqual
  )
  // 2.获取dispatch
  const dispathc = useDispatch()

  function handleClick(num) {
    // 3.派发dispatch
    dispathc(addNumberAction(num))
  }
  console.log('App render')
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={(e) => handleClick(1)}>+1</button>
      <Home />
    </div>
  )
})

export default App

// useSelector第二个参数的作用
// 案例中 在APP和Home组件中 都是用了store中的数据  App中使用的是counter Home中使用的是message
// 现在 在App中派发一个事件去修改counter  这时候Home组件重新渲染了 这是有损性能的 因为Home中压根没用到counter
// 原因是因为 useSelector Hook 在不传入第二个参数的情况下 默认会监听store中的所有数据，如果有数据变化了就会使得组件重新渲染
// 解决 只需要在使用useSelector的时候传入第二个参数即可  这个参数可以是函数然后在里面判断时候要渲染 这个不常用     还可以使用react-redux 提供的shallowEqual函数
// shallowEqual函数会做一个浅层的比较
// 添加完第二个参数后 就不会发生案例的情况了
