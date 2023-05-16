import { sum } from './util/math'
import { formatTime } from './util/format'
import _ from 'lodash'

function foo() {
  console.log('foo exection~')
  console.log(sum(1, 2))
  formatTime()
  console.log(_.join(1, 2))
}

export { foo }
