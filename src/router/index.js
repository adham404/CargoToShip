import Vue from 'vue'
import VueRouter from 'vue-router'
import confirmorder from "../components/order/confirmorder/confirmorder";
import profile from "../components/profile/profile";
import orderdata from "../components/order/orderdata/orderdata";
import ordercontaner from "../components/order/ordercontaner";
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/order',
    name: 'order',
    redirect: { name: 'orderinfo' },
    component: ordercontaner,
    children: [
      {
        path : 'orderpayment/',
        name : 'orderpayment',
        component : confirmorder,

      },
      {
        path : 'orderinfo/',
        name : 'orderinfo',
        component : orderdata,

      }

    ]
  },


  {
    path : '/profile',
    name : 'profile',
    component : profile,

  },

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
  routes
})

export default router
