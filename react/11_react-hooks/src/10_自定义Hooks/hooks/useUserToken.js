import { useContext } from 'react'
import { TokenContext, UserContext } from '../context'

// 获取contex相关的信息的 自定义hook
// 避免每个组件使用context还要单独引入context然后在useContext
export function useUserToken() {
  const user = useContext(UserContext)
  const token = useContext(TokenContext)
  return [user, token]
}
