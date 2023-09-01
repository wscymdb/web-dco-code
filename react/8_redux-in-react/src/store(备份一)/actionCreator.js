import { ADD_COUNT, FETCH_BANNERS, SUB_COUNT } from './constant'

export const createAddAction = (num) => ({ type: ADD_COUNT, num })
export const createSubAction = (num) => ({ type: SUB_COUNT, num })
export const createFetchData = (list) => ({ type: FETCH_BANNERS, list })

export const fetchBannerListAction = () => {
  return function (dispatch, getState) {
    fetch('http://123.207.32.32:8000/home/multidata')
      .then((res) => res.json())
      .then((res) => {
        dispatch(createFetchData(res.data.banner.list))
      })
      .catch((e) => {
        alert(e)
      })
  }
}
