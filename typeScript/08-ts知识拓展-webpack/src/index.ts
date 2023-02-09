import axios from 'axios'
import _ from 'underscore'
import imgw from './1111.jpg'

import type { AxiosAdapter } from 'axios'
const message: string = 'hhh'
console.log(message, 123)

const h2El = document.createElement('h1')
h2El.innerHTML = '你好大帅逼'
document.body.appendChild(h2El)

const promise = new Promise(() => {})

const imgEl = document.createElement('img')
imgEl.src = imgw
document.body.appendChild(imgEl)
