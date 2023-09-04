import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'

function withRouter(WrapperComponent) {
  // naviga
  return function (props) {
    // 获取跳转对象
    const navigate = useNavigate()
    // 获取动态路由的参数 /detail/:id
    const params = useParams()

    // 获取查询字符串  /detail?name=a&age=123
    // 有两种方式获取
    // 方式一 useLocation 这种获取的search是原始形式没有
    const location = useLocation()
    // 方式二 useSearchParams  返回的是URLSearchParams类 需要通过get方法才能获取
    // 这里将其转换为普通的对象 可以直接获取
    const [searchParams] = useSearchParams()
    const query = Object.fromEntries(searchParams)

    const router = { navigate, params, location, query }
    // 给类组件添加router对象
    return <WrapperComponent {...props} router={router} />
  }
}

export default withRouter
