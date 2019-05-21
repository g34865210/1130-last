import {reqpolicydesclist} from '../../../api'
import {RECEIVE_POLICYDESCLIST} from '../../mutation-types'
//状态
const state = {
  policydesclist:[],
};
//
const mutations = {
  [RECEIVE_POLICYDESCLIST] (state,policydesclist) {
    state.policydesclist = policydesclist
  },
};


const actions = {
  async getpolicydesclist({commit}){
    const result = await reqpolicydesclist();

    if(result.code === 0){
      const policyescList = result.data;
      commit(RECEIVE_POLICYDESCLIST,policyescList)
    }
  },
};


export default {
  state,
  mutations,
  actions
}
