// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './mock/mock-server'

import Split from './components/Split/Split'

import header_search from './components/headnav/header_search/header_search'


Vue.component('Split', Split);
Vue.component('headerSearch', header_search);


Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
