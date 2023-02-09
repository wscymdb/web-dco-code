import { defineStore } from 'pinia'

const useUser = defineStore('user', {
  state: () => ({
    name: 'zs',
    age: 19
  })
})
export default useUser
