import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";


Vue.config.productionTip = false;


export const EventBus = new Vue();

//FireBase 
// from -->  https://stackoverflow.com/questions/60536897/how-to-tell-a-vue-app-to-use-firebase-emulator
import  Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA-QrgH-0iuyy92uMGNATb-qFctc5APgGQ",
  authDomain: "cargotoship2.firebaseapp.com",
  databaseURL: "https://cargotoship2.firebaseio.com",
  projectId: "cargotoship2",
  storageBucket: "cargotoship2.appspot.com",
  messagingSenderId: "193072313981",
  appId: "1:193072313981:web:6bc531d009af01efc92314"
};

!Firebase.apps.length ? Firebase.initializeApp(firebaseConfig) : '';

console.log("Check outside");
if(window.location.hostname === 'localhost') {
  console.log("Check");
  Firebase.firestore().useEmulator('localhost', 7000 );
  Firebase.functions().useEmulator('localhost', 5001);
  Firebase.auth().useEmulator("http://localhost:9099");  
  /* OLD implementation */
  // Firebase.firestore().settings({ host: 'localhost:8080', ssl: false });
  // Firebase.functions().useFunctionsEmulator('http://localhost:5001');
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
