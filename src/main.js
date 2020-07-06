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
  //mydata
  apiKey: "AIzaSyAqHgynhZ3OcErbVrs-W1XSFvZL58UjPm8",
  authDomain: "test-4ec93.firebaseapp.com",
  databaseURL: "https://test-4ec93.firebaseio.com",
  projectId: "test-4ec93",
  storageBucket: "test-4ec93.appspot.com",
  messagingSenderId: "441615985189",
  appId: "1:441615985189:web:13a6ff4a8bba579e40edcc",
  measurementId: "G-7DXCF9K273"
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
