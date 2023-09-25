import React, { memo, useMemo, useState } from 'react'

const calcTotal = (num) => {
  console.log('calcTotl重新执行')
  return num * 2
}

const YmUser = memo((props) => {
  console.log('子组件渲染')
  return <h2>use:{props.info.name}</h2>
})

const App = memo(() => {
  const [count, setCount] = useState(0)

  // const calcNum = calcTotal(20)
  // 不依赖任何，当组件重新渲染 calcTotal函数也不会被重新执行 括号内可以写依赖的内容
  const calcNum = useMemo(() => calcTotal(20), [])

  function handleClick() {
    setCount(count + 1)
  }

  // 使用useMemo对子组件渲染进行优化
  // const info = { name: 'zs' }
  const info = useMemo(() => ({ name: 'zs' }), [])

  return (
    <div>
      <h2>total:{calcNum}</h2>
      <button onClick={(e) => handleClick()}>count:{count}</button>
      <YmUser info={info} />
    </div>
  )
})

export default App

// useMemo的优点
// 案例中 当点击计数器操作 count发生变化，组件被重新渲染，组件内部的所有东西都会被重新执行一遍，那么calcTotal这个函数也被重新执行
// 但是calcTotal函数与count没有半毛钱关系，所以没必要执行
// 使用useMemo 只有当依赖发生了变化时 才会重新返回一次结果

// 案例中 当点击计数器操作，count发生变化，组件被重新渲染 info又被重新生成了一次 是一个新对象，子组件中接受到新的值 所以重新渲染
// 其实子组件是不用重新渲染的 避免性能浪费
// 使用useMemo 只有当依赖发生了变化时 才会重新返回一次结果
