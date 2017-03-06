import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import "./css/reset.css";

Vue.use(Vuex);

new Vue({
  store: require('./store/store.js').default,
  el: '#app',
  render: h => h(App)
})
