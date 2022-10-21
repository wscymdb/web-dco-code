/**
 * @file 节流函数的实现
 * @author Jack <wscymdb@163.com>
 * @param {Function} cb 回调
 * @param {Number} interval 回调执行间隔
 * @param  {Boolean} leading 是否立即执行
 * @param {Boolean} trailing 尾部是否执行
 * @version 1.0
 */

function ymThrottle(cb, interval, { leading = true, trailing = false } = {}) {
  let startTime = 0;
  let timer = null;
  const _throttle = function (...args) {
    return new Promise((resolve, reject) => {
      try {
        const nowTime = Date.now();

        if (!leading && startTime === 0) {
          startTime = nowTime;
        }

        const waitTime = interval - (nowTime - startTime);

        if (waitTime <= 0) {
          console.log("first");
          if (timer) clearTimeout(timer);
          const res = cb.apply(this, args);
          resolve(res);
          startTime = nowTime;
          timer = null;
          return;
        }
        // 实现尾部取消
        // 在间隔点之后添加一个定时器
        // 如果是间隔点那么就会取消这个定时器
        if (trailing && !timer) {
          timer = setTimeout(() => {
            console.log("timer");
            const res = cb.apply(this, args);
            resolve(res);
            startTime = Date.now();
            timer = null;
          }, waitTime);
        }
      } catch (error) {
        reject(error);
      }
    });
  };
  // 取消
  _throttle.cancel = function () {
    if (timer) clearTimeout(timer);
  };
  return _throttle;
}
