import { createStore } from 'vuex'
import axios from 'axios'
import moduleA from './modules/moduleA'
export default createStore({
  state: {
    info: {
      name: 'zs'
    },
    counter: 0,
    level: 12,
    mediaList: []
  },
  getters: {},
  mutations: {
    addCounter(state, num) {
      state.counter += num
    },
    setMediaList(state, paload) {
      state.mediaList = paload
    }
  },
  actions: {
    addCounterAction(context, paload) {
      context.commit('addCounter', paload)
    },
    setMediaListAction(context) {
      axios.get('http://180.76.235.241:3000/media/list').then((res) => {
        const data = res.data.data
        context.commit('setMediaList', data)
      })
    }
  },
  modules: {
    moduleA
  }
})
