import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import trial from '@/components/trial.vue'

Vue.use(VueRouter)

const routes = [
    {
      path:'/Login',
      name: 'trial',
      component: trial
    }
  // {
  //   path: '/',
  //   name: 'Map',
  //   component: () => import('@/App.vue')
  // },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home,
  // },
  // {
    // path: '/about',
    // name: '',
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
