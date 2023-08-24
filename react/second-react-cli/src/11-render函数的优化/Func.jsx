import { memo } from 'react'

const Fnc = memo(function () {
  console.log('Fnc')
  return <h1>Fnc</h1>
})

export default Fnc
