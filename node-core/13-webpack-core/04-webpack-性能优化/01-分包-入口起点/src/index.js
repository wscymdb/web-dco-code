import axios from 'axios'
import dayjs from 'dayjs'

const message = '我是indexjs的文件'
console.log(message)
axios.get('/').then((res) => {
  console.log(res)
})
