import { defineStore } from 'pinia'
import axios from 'axios'

const useMedia = defineStore('useMedia', {
  state: () => ({
    list: []
  }),
  actions: {
    async getMediaList() {
      const { data } = await axios.get('http://180.76.235.241:3000/media/list')
      console.log(data)
      this.list = data.data
    }
  }
})

export default useMedia
