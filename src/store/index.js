import Vue from 'vue'
import Vuex from 'vuex'
import state from './states'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import sLogin from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sLogin
  },
  state,
  getters,
  mutations,
  actions
})
