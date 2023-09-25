import { useEffect, useState } from 'react'

export function useLocalStroage(key) {
  // 如果useState的逻辑太多 可以传入一个函数 这个函数会被立刻执行
  function fn() {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : ''
  }

  const [data, setData] = useState(fn)
  // const [data, setData] = useState(localStorage.getItem(key))
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data))
  }, [data, key])

  return [data, setData]
}
