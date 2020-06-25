import Vue from 'vue';
import App from './App.vue';
import router from './router';
import "./plugins/axios";



Vue.config.productionTip = false;
Vue.prototype.$senior_seen = false;




new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
