function loginAuth(OriginComponent) {
  return (props) => {
    const token = window.localStorage.getItem('token')
    return token ? <OriginComponent {...props} /> : '尚未登录哦！'
  }
}
export default loginAuth
