import { FETCH_BANNERS } from './constant'

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
