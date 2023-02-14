import YMRequest from './request'
// 可以用这种方式
// import { BASE_URL, TIME_OUT } from './congfig'

// 也可用环境变量中的方式
const BASE_URL = import.meta.env.VITE_BASE_URL
const TIME_OUT = Number(import.meta.env.VITE_TIME_OUT)

const requestHY = new YMRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default requestHY
