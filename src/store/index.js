import Vue from 'vue'
import Vuex from 'vuex'
import state from './states'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import sLogin from './modules/login'
import viewsInfo from './modules/views/info'
import viewsMyclubNewclub from './modules/views/myclub/newclub'
import viewsManageclubBasicinfo from './modules/views/manageclub/basicinfo'
import viewsManageclubMembers from './modules/views/manageclub/members'
import viewsManageclubApply from './modules/views/manageclub/apply'
import viewsManageclubArchitecture from './modules/views/manageclub/architecture'
import viewsManageclubActivity from './modules/views/manageclub/activity'
import viewsManageclubAlbum from './modules/views/manageclub/album'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sLogin,
    viewsInfo,
    viewsMyclubNewclub,
    viewsManageclubBasicinfo,
    viewsManageclubMembers,
    viewsManageclubApply,
    viewsManageclubArchitecture,
    viewsManageclubActivity,
    viewsManageclubAlbum
  },
  state,
  getters,
  mutations,
  actions
})
