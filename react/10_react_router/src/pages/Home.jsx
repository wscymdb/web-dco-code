import React, { PureComponent } from 'react'
import { Link, Outlet } from 'react-router-dom'
import withRouter from '../hoc/withRouter'

export class Home extends PureComponent {
  handleClick(path) {
    console.log(path)
    this.props.router.navigate(path)
  }
  handleClick1(path) {
    this.props.router.navigate({
      path,
    })
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <nav>
          <Link to="/home/reco">to recommand</Link>
          <Link to="/home/rank">to ranking</Link>
          <button onClick={(e) => this.handleClick('/home/reco')}>推荐</button>
          <button onClick={(e) => this.handleClick('/home/rank')}>排行</button>
          <button onClick={(e) => this.handleClick1('/detail')}>详情</button>
        </nav>
        {/* 占位组件符 表示子路由加载的组件放在这里 */}
        <Outlet />
      </div>
    )
  }
}

export default withRouter(Home)
