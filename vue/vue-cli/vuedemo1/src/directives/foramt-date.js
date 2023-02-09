import dayjs from 'dayjs'
export default function directiveFtime(app) {
  app.directive('ftime', {
    mounted(el) {
      const timestamp = el.textContent * 1
      console.log(timestamp)

      el.textContent = dayjs(timestamp).format('YYYY-MM-DD')
    }
  })
}
