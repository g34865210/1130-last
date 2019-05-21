import {reqTabs,reqRecommendData,
  reqColection,reqAutoRecommendData,reqList} from '../../../api'
import {RECEIVE_TABS,RECEIVE_RECOMMENDDATA,
  RECEIVE_COMMENTDATA,RECEIVE_AUTORECOMMENDDATA,
  RECEIVE_THREE_TYPE_DATA} from '../../mutation-types'
//状态
const state = {
  tabs :[],
  recommendData: [],
  moreRecommendData: {
    hasMore: true,
    result: []
  },
  commentData: {},
  threeTypeData: {
    hasMore: true,
    type: 1,
    pagination: {},
    topicList: []
  }
};
//
const mutations = {
  [RECEIVE_TABS] (state,tabs) {
    state.tabs = tabs
  },
  [RECEIVE_RECOMMENDDATA] (state,commendData) {
    state.recommendData = commendData
  },
  [RECEIVE_AUTORECOMMENDDATA] (state,AutoRecommendData) {
    state.moreRecommendData = AutoRecommendData
  },
  [RECEIVE_COMMENTDATA] (state,commentData) {
    state.commentData = commentData
  },
  [RECEIVE_THREE_TYPE_DATA] (state,threeTypeData) {
    state.threeTypeData = threeTypeData
  },
};


const actions = {
  async gettbas({commit}){
    const result = await reqTabs();
    if(result.code === "200"){
      const tabs = result.data;
      commit(RECEIVE_TABS,tabs)
    }
  },
  async getcommendData({commit}){
    const result = await reqRecommendData();
    if(result.code === "200"){
      const commendData = result.data;
      commit(RECEIVE_RECOMMENDDATA,commendData)
    }
  },
  async getAutoRecommendData({commit}){
    const result = await reqAutoRecommendData();
    if(result.code === "200"){
      const AutoRecommendData = result.data;
      commit(RECEIVE_AUTORECOMMENDDATA,AutoRecommendData)
    }
  },
  async getcommentData2({commit},id=6){
    const result = await reqColection(id);
    if(result.code === "200"){
      const commentData = result.data;
      commit(RECEIVE_COMMENTDATA,commentData)
    }
  },
  async getThreeTypeData ({commit},{page, size, type}) {    // 晒单 - 可爱值max的严选萌物
    const result = await reqList(page, size, type);    // 发送ajax
    const threeTypeData = result.data

    if (result.code === "200") {
      threeTypeData.type = type
      commit(RECEIVE_THREE_TYPE_DATA, {threeTypeData})    // 根据返回的数据调用 mutations 更改数据
    }
  }
};


export default {
  state,
  mutations,
  actions
}
