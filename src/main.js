/*eslint-disable*/
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import "./plugins/axios";
import firebase from 'firebase';
// import simplemaps_worldmap from  "../public/worldmap"
import vuetify from '@/plugins/vuetify' // path to vuetify export






//This is the configuration for w9fhwfhfhe9f I pasted the config object and then inserted it into the initializeApp function
var firebaseConfig = {
  //cargotoship2data
  apiKey: "AIzaSyA-QrgH-0iuyy92uMGNATb-qFctc5APgGQ",
  authDomain: "cargotoship2.firebaseapp.com",
  databaseURL: "https://cargotoship2.firebaseio.com",
  projectId: "cargotoship2",
  storageBucket: "cargotoship2.appspot.com",
  messagingSenderId: "193072313981",
  appId: "1:193072313981:web:6bc531d009af01efc92314"
  //adhamdata
  // apiKey: "AIzaSyBSMAICYcm8WxTIlEPTCmRLuoR6s4vwiLM",
  // authDomain: "cargo2ship-c9662.firebaseapp.com",
  // databaseURL: "https://cargo2ship-c9662.firebaseio.com",
  // projectId: "cargo2ship-c9662",
  // storageBucket: "cargo2ship-c9662.appspot.com",
  // messagingSenderId: "1062829855943",
  // appId: "1:1062829855943:web:809c71cde7d3af29ccdae2",
  // measurementId: "G-W62MFYZRES"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// w9fhwfhfhe9f.analytics();
Vue.config.productionTip = false;
Vue.prototype.$senior_seen = false;





new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
