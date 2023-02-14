enum CacheType {
  Local,
  Seession
}

class Cache {
  storage: Storage
  namespace: string
  constructor(type: CacheType, namespace: string) {
    this.namespace = namespace
    this.storage = type === CacheType.Local ? localStorage : sessionStorage
  }

  setCache(key: string, value: any) {
    if (value) {
      let storage = this.getStorage()
      storage[key] = value

      this.storage.setItem(this.namespace, JSON.stringify(storage))
    }
  }

  getCache(key: string) {
    let value = this.getStorage()[key]

    if (value) return value
  }

  removeCach(key: string) {
    let val = this.getStorage()
    delete val[key]

    localStorage.setItem(this.namespace, JSON.stringify(val))
  }

  clear() {
    this.storage.clear()
  }

  private getStorage() {
    return JSON.parse(localStorage.getItem(this.namespace) || '{}')
  }
}

const localCache = new Cache(CacheType.Local, 'cym-cms')
const sessionCache = new Cache(CacheType.Seession, 'cym-cms')

export { localCache, sessionCache }
