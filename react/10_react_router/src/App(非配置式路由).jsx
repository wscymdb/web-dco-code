import React, { PureComponent } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import HomeRecommand from './pages/HomeRecommand'
import HomeRanking from './pages/HomeRanking'
import Detail from './pages/Detail'
import User from './pages/User'

export class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <div className="header">
          <nav>
            <Link to="/home"> to home</Link>
            <Link to="/about"> to about</Link>
          </nav>
        </div>
        <div className="main">
          {/* 创建路由映射关系 */}
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            {/* 路由嵌套 */}
            <Route path="/home" element={<Home />}>
              {/* 跳转到home 自动重定向到/home/reco */}
              <Route path="/home" element={<Navigate to="/home/reco" />} />
              <Route path="/home/reco" element={<HomeRecommand />} />
              <Route path="/home/rank" element={<HomeRanking />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/user" element={<User />} />
            {/* *表示通配符 上面的路径都匹配不到的时候会执行这个路由  */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <div className="footer">footer</div>
      </div>
    )
  }
}

export default App
