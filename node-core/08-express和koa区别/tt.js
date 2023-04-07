const axios = require('axios')

axios.get('https://www.3gbizhi.com/wallQFJ/').then((res) => {
  const reg = /$<div class="menucolor cl">/
  let a = res.data.match(reg)
  console.log(a)
})

let msg =
  '<div class="menucolor cl">12312</div><div class="menucolor">12323</div>'
let reg = /<div class="menucolor cl">12312<\/div>/gi

console.log(reg.exec(msg))
