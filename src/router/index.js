import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
