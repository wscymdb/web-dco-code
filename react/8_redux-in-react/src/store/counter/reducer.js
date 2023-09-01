import { ADD_COUNT, SUB_COUNT } from './constant'

const initialState = {
  counter: 100,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNT:
      return { ...state, counter: state.counter + action.num }
    case SUB_COUNT:
      return { ...state, counter: state.counter + action.num }
    default:
      return state
  }
}

export default reducer
