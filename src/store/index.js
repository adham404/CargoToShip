import Vue from "vue";
import Vuex from "vuex";
import UserData from "./Modules/UserData"
import UserCards from "./Modules/UserCridetCards"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    UserData,
    UserCards
  }
});
