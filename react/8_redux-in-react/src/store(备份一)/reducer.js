import { ADD_COUNT, FETCH_BANNERS, SUB_COUNT } from './constant'

const initialState = {
  counter: 100,
  banners: [],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNT:
      return { ...state, counter: state.counter + action.num }
    case SUB_COUNT:
      return { ...state, counter: state.counter + action.num }
    case FETCH_BANNERS:
      return { ...state, banners: action.list }
    default:
      return state
  }
}

export default reducer
