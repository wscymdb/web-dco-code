import { defineStore } from 'pinia'
import * as http from '@/service/login/login'
import { ElMessage } from 'element-plus'
import type { IAccountLogin } from '@/types/login'
import { localCache } from '@/utils/cache'

const LOGIN_TOKEN = 'token'

const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: localStorage.getItem(LOGIN_TOKEN) ?? '',
    name: ''
  }),
  actions: {
    async accountLoginAction(params: IAccountLogin) {
      const { data, code, ...arg } = await http.login(params)
      if (code !== 0) return ElMessage.error(arg)
      const { id, token, name } = data
      this.name = name
      this.id = id
      this.token = token
      // 本地缓存
      localCache.setCache(LOGIN_TOKEN, this.token)
    }
  }
})

export default useLoginStore
