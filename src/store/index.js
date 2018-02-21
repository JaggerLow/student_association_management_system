import Vue from 'vue'
import Vuex from 'vuex'
import state from './states'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import sLogin from './modules/login'
import viewsInfo from './modules/views/info'
import viewsMyclubNewclub from './modules/views/myclub/newclub'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sLogin,
    viewsInfo,
    viewsMyclubNewclub
  },
  state,
  getters,
  mutations,
  actions
})
