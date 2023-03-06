import { localCache } from '@/utils/cache'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import YMRequest from './request'
// 可以用这种方式
// import { BASE_URL, TIME_OUT } from './congfig'

// 也可用环境变量中的方式
const BASE_URL = import.meta.env.VITE_BASE_URL
const TIME_OUT = Number(import.meta.env.VITE_TIME_OUT)

const requestYM = new YMRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    successRequestFn(config) {
      const token = localCache.getCache('token')
      if (config.headers && token) {
        config.headers.Authorization = token
      }

      return config
    },
    failResponseFn(err) {
      const {
        response: { data }
      } = err
      ElMessage.error(data)
    }
  }
})

export default requestYM
