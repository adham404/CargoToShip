import Vue from "vue";
import Vuex from "vuex";
import UserData from "./Modules/UserData"
import UserCards from "./Modules/UserCridetCards"
import SearchBar from "./Modules/SearchBar"
import Listing from "./Modules/Listing"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    UserData,
    UserCards,
    SearchBar,
    Listing
  }
});
