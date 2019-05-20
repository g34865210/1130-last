import {RECEIVE_HOME,RECEIVE_POLICYDESCLIST,RECEIVE_CATEGORY} from './mutation-types'

export default {
  [RECEIVE_HOME] (state,home) {
    state.home = home
  },
  [RECEIVE_POLICYDESCLIST] (state,policydesclist) {
    state.policydesclist = policydesclist
  },
  [RECEIVE_CATEGORY] (state,category) {
    state.category = category
  },
}
