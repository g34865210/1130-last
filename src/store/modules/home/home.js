import {reqHome} from '../../../api'
import {RECEIVE_HOME} from '../../mutation-types'
//状态
const state = {
  home :{},
};
//
const mutations = {
  [RECEIVE_HOME] (state,home) {
    state.home = home
  },
};


const actions = {
  async gethome({commit}){
    const result = await reqHome();

    if(result.code === 0){
      const home = result.data;
      commit(RECEIVE_HOME,home)
    }
  },
};


export default {
  state,
  mutations,
  actions
}
