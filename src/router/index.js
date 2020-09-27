import Vue from 'vue'
import VueRouter from 'vue-router'
import MyShips from '@/views/MyShips'
import MyCargo from '@/views/MyCargo'
import Orders from '@/views/Orders'
import Profile from '@/views/Profile'
import HomePage from '@/views/HomePage'
import OrderConfirmation from '@/views/OrderConfirmation'
import OrderData from '@/components/OrderConfirmationComponents/orderdata/orderdata'
import OrderPayment from '@/components/OrderConfirmationComponents/confirmorder/confirmorder'


Vue.use(VueRouter)

const routes = [
    {
      path:'/item',
      name: 'Order',
      component: OrderConfirmation,
      redirect: { name: 'OrderData' },
      children:[
        {
          path:"info/",
          name: "OrderData",
          component:OrderData,
        },
        {
          path:"Payment/",
          name: "OrderPayment",
          component:OrderPayment,
        },
      ]
    },
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
