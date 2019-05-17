import {reqHome,reqpolicydesclist} from "../api"
import {RECEIVE_HOME,RECEIVE_POLICYDESCLIST} from './mutation-types'

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
  }
}
