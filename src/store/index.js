
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

import home from './modules/home/home'
import category from './modules/category/category'
import policydesclist from './modules/home/policydesclist'
import things from './modules/things/things'

Vue.use(Vuex);

export default new Vuex.Store ({
  state,
  actions,
  getters,
  mutations,
  modules:{
    home,
    category,
    policydesclist,
    things
  }
  })
