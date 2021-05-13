import Vue from "vue";
import Vuex from "vuex";
import UserData from "./Modules/UserData"
import UserCards from "./Modules/UserCridetCards"
import SearchBar from "./Modules/SearchBar"
import Listing from "./Modules/Listing"
import Map from "./Modules/Map"
import UserAuth from "./Modules/UserAuth"
import UserOrders from "./Modules/UserOders"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    UserData,
    UserAuth,
    UserCards,
    SearchBar,
    Listing,
    Map,
    UserOrders
  }
});
