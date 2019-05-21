import {reqcategory} from '../../../api'
import {RECEIVE_CATEGORY} from '../../mutation-types'
//状态
const state = {
  category:{}
};
//
const mutations = {
  [RECEIVE_CATEGORY] (state,category) {
    state.category = category
  },
};


const actions = {
  async getcategory({commit}){
    const result = await reqcategory();

    if(result.code === 0){
      const category = result.data;
      commit(RECEIVE_CATEGORY,category)
    }
  },
};


export default {
  state,
  mutations,
  actions
}
