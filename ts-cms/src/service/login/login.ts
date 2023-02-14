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
