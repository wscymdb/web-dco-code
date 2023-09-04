import Home from '../pages/Home'
// import About from '../pages/About'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import HomeRecommand from '../pages/HomeRecommand'
import HomeRanking from '../pages/HomeRanking'
import Detail from '../pages/Detail'
import User from '../pages/User'
import { Navigate } from 'react-router-dom'
import React from 'react'

// 懒加载
const About = React.lazy(() => import('../pages/About'))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: '/home',
        element: <Navigate to="/home/reco" />,
      },
      {
        path: '/home/reco',
        element: <HomeRecommand />,
      },
      {
        path: '/home/rank',
        element: <HomeRanking />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/user',
    element: <User />,
  },
  {
    path: '/detail/:id',
    element: <Detail />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default routes
