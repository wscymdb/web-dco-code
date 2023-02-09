import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home/:id',
    name: 'home',
    component: Home,
    children: [
      {
        path: '',
        name: 'about',
        component: () => import('@/views/about')
      }
    ]
  },
  {
    path: '/pinia',
    name: 'pinia',
    component: () => import('@/views/pinia')
  },

  {
    path: '/:pathMatch(.*)',
    component: () => import('@/views/404/notFound')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

let isAdmin = true
if (isAdmin) {
  router.addRoute({
    path: '/admin',
    component: () => import('@/views/admin')
  })
  router.addRoute('home', {
    path: 'lover',
    component: () => import('@/views/lover')
  })
}

// 导航守卫
router.beforeEach((to, from) => {
  console.log(to, from)
  // if (to.path === "/home/123") return "/admin";
})

console.log(router.getRoutes())
export default router
