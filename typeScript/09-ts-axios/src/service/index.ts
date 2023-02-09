import YMRequest from './request'
import { BASE_URL, TIME_OUT } from './congfig'

const requestHY = new YMRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

// 有私有拦截器的请求实例
const requestCYM = new YMRequest({
  baseURL: 'http://www.wscym.top:3000',
  timeout: 8000,
  interceptors: {
    successRequestFn(config) {
      console.log('实例请求拦截')
      return config
    },

    successResponseFn(config) {
      console.log('实例响应拦截')
      return config
    }
  }
})

export { requestHY, requestCYM }
