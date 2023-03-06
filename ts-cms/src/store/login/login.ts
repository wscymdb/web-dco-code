import { defineStore } from 'pinia'
import router from '@/router'
import { ElMessage } from 'element-plus'

import type { IAccountLogin } from '@/types/login'

import * as http from '@/service/login/login'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constants'
import { mapMenusToRoutes } from '@/utils/map-menus'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any[]
}

interface ILoginAction {
  accountLoginAction: (params: IAccountLogin) => Promise<any>
  getUserInfoAction: (id: number) => Promise<any>
  getUserMenuTreeAction: (id: number) => Promise<any>
  logoutAction: () => void
  loadLoclInfosAction: () => void
}

const useLoginStore = defineStore<string, ILoginState, {}, ILoginAction>('login', {
  state: () => ({
    token: '',
    userInfo: {},
    userMenus: []
  }),
  actions: {
    async accountLoginAction(params: IAccountLogin) {
      try {
        const { data, code, ...arg } = await http.login(params)
        if (code !== 0) return ElMessage.error(arg)
        const { id, token } = data
        this.token = token
        // 本地缓存
        localCache.setCache(LOGIN_TOKEN, this.token)

        // 获取用的信息
        this.getUserInfoAction(id)

        // 获取角色的菜单树
        await this.getUserMenuTreeAction(id)

        // 动态添加路由
        const routes = mapMenusToRoutes(this.userMenus)
        routes.forEach((route) => router.addRoute('main', route))

        // 跳转
        router.push('/main')
      } catch (error) {
        console.log(error)
      }
    },
    async getUserInfoAction(id: number) {
      const { data } = await http.getUserInfo(id)
      localCache.setCache('userInfo', data)
      this.userInfo = data
    },
    async getUserMenuTreeAction(id: number) {
      const { data } = await http.getUserMenuTree(id)
      localCache.setCache('userMenus', data)
      this.userMenus = data || []
    },
    // 当用户登录之后在main页面刷新，那么注册的路由就会没有了，就不能正确的跳转
    // 在注册pinia之后调用这个函数 就可以重新注册了
    loadLoclInfosAction() {
      const token = localCache.getCache(LOGIN_TOKEN)
      const userInfo = localCache.getCache('userInfo')
      const userMenus = localCache.getCache('userMenus')

      if (token && userInfo && userMenus) {
        this.token = token
        this.userInfo = userInfo
        this.userMenus = userMenus
      }

      // 动态添加路由
      const routes = mapMenusToRoutes(this.userMenus)
      routes.forEach((route) => router.addRoute('main', route))
    },
    logoutAction() {
      localCache.removeCach('token')
      router.push('/login')
    }
  }
})

export default useLoginStore
