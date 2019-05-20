import {reqHome,reqpolicydesclist,reqcategory} from "../api"
import {RECEIVE_HOME,RECEIVE_POLICYDESCLIST,RECEIVE_CATEGORY} from './mutation-types'

export default {
  async gethome({commit}){
   const result = await reqHome();

    if(result.code === 0){
      const home = result.data;
      commit(RECEIVE_HOME,home)
    }
  },
  async getpolicydesclist({commit}){
   const result = await reqpolicydesclist();

    if(result.code === 0){
      const policyescList = result.data;
      commit(RECEIVE_POLICYDESCLIST,policyescList)
    }
  },


  async getcategory({commit}){
    const result = await reqcategory();

    if(result.code === 0){
      const category = result.data;
      commit(RECEIVE_CATEGORY,category)
    }
  },
}
