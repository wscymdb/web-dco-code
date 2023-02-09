import { createRouter, createWebHashHistory } from 'vue-router'
import Father from '@/views/father'

const routes = [
  {
    path: '/',
    name: 'h',
    redirect: '/home'
  },
  {
    path: '/son',
    name: 'son',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../components/Son.vue')
  },
  {
    path: '/comp',
    name: 'comp',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/composition.vue')
  },
  {
    path: '/cps',
    name: 'cps',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/compSetupScript.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/example/home')
  },
  {
    path: '/dire',
    name: 'dire',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/example/directive')
  },
  {
    path: '/h',
    name: 'h',
    component: () => import(/* webpackChunkName: "about" */ '@/views/example/h')
  },
  {
    path: '/jx',
    name: 'jx',
    component: () => import(/* webpackChunkName: "about" */ '@/views/jsx/index')
  },
  {
    path: '/tran',
    name: 'tran',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/transition/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
