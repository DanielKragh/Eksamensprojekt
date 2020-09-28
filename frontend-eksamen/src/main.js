import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Model from "./model/Model"
import axios from "axios";

const caller = axios.create({
  baseURL: "http://localhost:5033/",
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  }
});
const model = new Model(caller);

Vue.config.productionTip = false
Vue.prototype.log = window.console.log;
Vue.prototype.model = model;


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
