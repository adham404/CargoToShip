import Vue from 'vue'
import VueRouter from 'vue-router'
import MyShips from '@/views/MyShips'
import MyCargo from '@/views/MyCargo'
import Orders from '@/views/Orders'
import Profile from '@/views/Profile'
import HomePage from '@/views/HomePage'


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
  {
    path: '/Account',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/Home',
    name: 'HomePage',
    component: HomePage,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
