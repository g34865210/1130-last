import {RECEIVE_HOME,RECEIVE_POLICYDESCLIST} from './mutation-types'

export default {
  [RECEIVE_HOME] (state,home) {
    state.home = home
  },
  [RECEIVE_POLICYDESCLIST] (state,policydesclist) {
    state.policydesclist = policydesclist
  },
}
