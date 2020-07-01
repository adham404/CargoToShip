/*eslint-disable*/
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import "./plugins/axios";
import firebase from 'firebase';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'




//This is the configuration for firebase I pasted the config object and then inserted it into the initializeApp function
var firebaseConfig = {
  apiKey: "AIzaSyBSMAICYcm8WxTIlEPTCmRLuoR6s4vwiLM",
  authDomain: "cargo2ship-c9662.firebaseapp.com",
  databaseURL: "https://cargo2ship-c9662.firebaseio.com",
  projectId: "cargo2ship-c9662",
  storageBucket: "cargo2ship-c9662.appspot.com",
  messagingSenderId: "1062829855943",
  appId: "1:1062829855943:web:809c71cde7d3af29ccdae2",
  measurementId: "G-W62MFYZRES"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
Vue.config.productionTip = false;
Vue.prototype.$senior_seen = false;
Vue.use(Vuetify)





new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
