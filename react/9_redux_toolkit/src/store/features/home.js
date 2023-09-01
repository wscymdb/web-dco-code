import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// 创建一个异步的action
export const fetchBannersAction = createAsyncThunk(
  'fetchbanners',
  async (info, store) => {
    let res = await fetch('http://123.207.32.32:8000/home/multidata')
    res = await res.json()
    // store.dispatch(fetchBanners(res.data.banner.list))
    return res.data
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    banners: [],
  },
  reducers: {
    fetchBanners(state, { payload }) {
      console.log(payload)
      state.banners = payload
    },
  },
  // 这种写法 RTK2.0会被废弃 建议使用链式写法
  // extraReducers: {
  //   [fetchBannersAction.pending]() {
  //     console.log('fetchBannersAction pending')
  //   },
  //   [fetchBannersAction.fulfilled](state, { payload }) {
  //     console.log(payload)
  //     const banner = payload.banner.list
  //     state.banners = banner
  //     console.log('fetchBannersAction fulfiled')
  //   },
  //   [fetchBannersAction.rejected]() {
  //     console.log('fetchBannersAction rejected')
  //   },
  // },
  // extraReducers的链式写法
  extraReducers: (builder) => {
    builder.addCase(fetchBannersAction.fulfilled, (state, { payload }) => {
      state.banners = payload.banner.list
    })
  },
})

export const { fetchBanners } = homeSlice.actions

export default homeSlice.reducer
