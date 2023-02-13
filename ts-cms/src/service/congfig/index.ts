// vite 默认提供的环境变量
// import.meta.env
const MODE = import.meta.env.MODE
let BASE_URL = ''
let TIME_OUT = 8000

if (MODE === 'development') {
  BASE_URL = 'http://152.136.185.210:5000'
  TIME_OUT = 12000
} else if (MODE === 'production') {
  BASE_URL = 'http://152.136.185.210:4000'
}

export { BASE_URL, TIME_OUT }
