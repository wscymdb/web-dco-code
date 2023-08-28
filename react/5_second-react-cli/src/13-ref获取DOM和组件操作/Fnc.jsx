import { forwardRef } from 'react'

const Fnc = forwardRef(function (prop, ref) {
  // 第一个参数是父组件传入的prop
  // 第二个参数就是父组件传入的ref
  return (
    <div>
      <h1 ref={ref}>Fnc</h1>
    </div>
  )
})

export default Fnc
