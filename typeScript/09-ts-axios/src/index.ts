import { requestHY, requestCYM } from './service'

interface IHome {
  data: {}
  code: number
}

requestHY
  .request<IHome>({
    url: '/home/multidata',
    params: {
      name: '123',
      age: 123
    }
  })
  .then((res) => {
    console.log(res, 'hy')
  })

requestCYM
  .request({
    url: '/comment/music',
    params: {
      id: 186016,
      limit: 1
    },
    interceptors: {
      successRequestFn(config) {
        console.log('某个实例请求拦截', config)
        return config
      },
      successResponseFn(res) {
        console.log('某个请求响应拦截', res)
        return res
      }
    }
  })
  .then((res) => {
    console.log(res, 'cym')
  })
