// 定义关于counter的store
import { defineStore } from 'pinia'

const useCounter = defineStore('counter', {
  state: () => ({ counter: 100 }),
  getters: {
    doubleCount(state) {
      console.log(this)
      return state.counter * 2
    }
  },
  actions: {
    setCounter() {
      this.counter += 200
    }
  }
})
export default useCounter
