/**
 * @author jack
 * @description Storage的二次封装
 */

class Cache {
  constructor(isLocal) {
    this.storage = isLocal ? "localStorage" : "sessionStorage";
  }
  getItem(key) {
    if (!key) throw new Error("key error: key is a must value");
    return JSON.parse(window[this.storage].getItem(key));
  }
  setItem(key, value) {
    if (!value) throw new Error("value error: value is a must value");
    return window[this.storage].setItem(key, JSON.stringify(value));
  }
  removeItem(key) {
    if (!key) throw new Error("key error: key is a must value");
    return window[this.storage].removeItem(key);
  }
  clear() {
    return window[this.storage].clear();
  }
}

const localCache = new Cache(true);
const sessionCache = new Cache();
