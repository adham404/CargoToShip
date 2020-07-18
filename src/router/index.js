import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import AddCargo from '../components/AddCargo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/AddCargo',
    component: AddCargo
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
  routes
})

export default router
