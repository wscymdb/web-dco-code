/**
 * @file 防抖函数
 * @param {Function} cb 回调
 * @param {Number} delay 延迟时间
 * @param {Boolean} immediate 是否立即执行
 * @example ymDebounce(()=>{},1000,false)
 * @version 1.0
 * @author Jack <wscymdb@163.com>
 */

function ymDebounce(cb, delay, immediate = false) {
  // 创建变量
  let timer = null
  let isInvoke = false
  let res = undefined
  // 返回一个函数用来作为oninput的事件
  const _debounce = function (...args) {
    return new Promise((resolve, reject) => {
      // 判断是否立即执行
      if (immediate && !isInvoke) {
        res = cb.apply(this, args)
        resolve(res)
        isInvoke = true
        return
      }

      if (timer) clearTimeout(timer)
      // 创建一个计时器
      timer = setTimeout(() => {
        try {
          res = cb.apply(this, args)
          resolve(res)
          timer = null
          isInvoke = false
        } catch (error) {
          reject(error)
        }
      }, delay)
    })
  }
  // 取消防抖
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    timer = null
    isInvoke = false
  }
  return _debounce
}
