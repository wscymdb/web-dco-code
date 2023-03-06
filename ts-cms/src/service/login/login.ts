import http from '@/service'

import type { IAccountLogin } from '@/types/login'

// 用户登录
export const login = (data: IAccountLogin) => {
  return http.request({
    method: 'POST',
    url: '/login',
    data
  })
}
// 获取用户信息
export const getUserInfo = (id: number) => {
  return http.request({
    method: 'GET',
    url: `/users/${id}`
  })
}

// 根据ID查询角色的菜单树
export const getUserMenuTree = (id: number) => {
  return http.request({
    method: 'GET',
    url: `/role/${id}/menu`
  })
}
