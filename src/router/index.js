import Vue from 'vue'
import VueRouter from 'vue-router'
import MyShips from '@/views/MyShips'
import MyCargo from '@/views/MyCargo'
import Orders from '@/views/Orders'


Vue.use(VueRouter)

const routes = [
    {
      path:'/MyShips',
      name: 'MyShips',
      component: MyShips
    },
  {
    path: '/MyCargo',
    name: 'MyCargo',
    component: MyCargo
  },
  {
    path: '/Purchased Contacts',
    name: 'Orders',
    component: Orders,
  },
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
