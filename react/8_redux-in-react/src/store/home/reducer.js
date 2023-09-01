import { FETCH_BANNERS } from './constant'

const initialState = {
  banners: [],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BANNERS:
      return { ...state, banners: action.list }
    default:
      return state
  }
}

export default reducer
