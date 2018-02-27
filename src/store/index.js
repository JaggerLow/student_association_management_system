import Vue from 'vue'
import Vuex from 'vuex'
import state from './states'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import sLogin from './modules/login'
import sUserinfo from './modules/userinfo'
import viewsDynamic from './modules/views/dynamic'
import viewsRegistered from './modules/views/registered'
import viewsInfo from './modules/views/info'
import viewsMyclubNewclub from './modules/views/myclub/newclub'
import viewsMyclub from './modules/views/myclub'
import viewsManageclubBasicinfo from './modules/views/manageclub/basicinfo'
import viewsManageclubMembers from './modules/views/manageclub/members'
import viewsManageclubApply from './modules/views/manageclub/apply'
import viewsManageclubArchitecture from './modules/views/manageclub/architecture'
import viewsManageclubActivity from './modules/views/manageclub/activity'
import viewsManageclubAlbum from './modules/views/manageclub/album'
import viewsManageclubNewactivity from './modules/views/manageclub/newactivity'
import viewsClub from './modules/views/club'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sLogin,
    sUserinfo,
    viewsDynamic,
    viewsRegistered,
    viewsInfo,
    viewsMyclub,
    viewsMyclubNewclub,
    viewsManageclubBasicinfo,
    viewsManageclubMembers,
    viewsManageclubApply,
    viewsManageclubArchitecture,
    viewsManageclubActivity,
    viewsManageclubAlbum,
    viewsManageclubNewactivity,
    viewsClub
  },
  state,
  getters,
  mutations,
  actions
})
