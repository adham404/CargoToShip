import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/Map",
    name: "Map",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/components/HomePage/Map.vue")
  },
  {
    path: "/Login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Login.vue")
  },
  {
    path: "/SignUp",
    name: "SignUp",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/SignUp.vue")
  },
  {
    path: "/CargoForm",
    name: "CargoForm",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/components/Forms/CargoForm/AddCargo.vue")
  },
  {
    path: "/ShipForm",
    name: "ShipForm",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/components/Forms/ShipForm/AddShip.vue")
  },
  {
    path: "/Marwan",
    name: "Marwan",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Marwan.vue")
  },
  {
    path: "/AddCard",
    name: "AddCard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/AddCridetCard.vue")
  },
  {
    path: "/Success",
    name: "Success",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/PymentSucsses.vue")
  },
  {
    path: "/Search",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/SearchBar.vue")

  },
  {
    path: "/ShortList",
    name: "ShortList",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/ShortListing.vue")

  },
  {
    path: "/TableList",
    name: "TableList",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/TableListing.vue")
  },
  {
    path: "/Orders",
    name: "Orders",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Orders.vue")
  },
  {
    path: "/Login2",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Authentication/Login.vue")
  },
  {
    path: "/SignUp2",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Authentication/SignUp.vue")
  },
  {
    path: "/Random",
    name: "Random",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Random.vue")
  }


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
