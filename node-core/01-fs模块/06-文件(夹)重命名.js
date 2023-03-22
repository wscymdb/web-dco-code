const fs = require('fs')

fs.rename('./image', 'ym', (err) => {
  console.log(err)
})
