export default {
  namespaced: true,
  state: () => ({
    name: '我是ModuleA的state'
  }),
  getters: {
    yourName() {
      return 'hahha'
    }
  },
  mutations: {
    demo() {
      console.log('first')
    }
  }
}
