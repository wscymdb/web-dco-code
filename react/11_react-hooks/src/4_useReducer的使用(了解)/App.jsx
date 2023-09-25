import React, { memo, useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        counter: state.counter + action.num,
        message: '我是add',
      }
    default:
      return {
        ...state,
        counter: state.counter - action.num,
        message: '我是sub',
      }
  }
}

const App = memo(() => {
  const [state, dispatch] = useReducer(reducer, { counter: 1 })

  return (
    <div>
      <h1>
        counter:{state.counter},msg:{state.message}
      </h1>
      <button onClick={(e) => dispatch({ type: 'add', num: 1 })}>+</button>
      <button onClick={(e) => dispatch({ type: 'sub', num: 1 })}>-</button>
    </div>
  )
})

export default App
