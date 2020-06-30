import Vue from 'vue'
import VueRouter from 'vue-router'
import creditcardinputdata from "../components/creditcardinputdata";
import paypal from "../components/paypal";
import confirmorder from "../components/confirmorder";
import profile from "../components/profile/profile";
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

  {
    path : '/orderpayment',
    name : 'orderpayment',
    component : confirmorder,
    children: [
      {
        path : '',
        name : 'Creditcard',
        component : creditcardinputdata,

      },
      {
        path : 'paypal',
        name : 'paypal',
        component : paypal,

      },
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
