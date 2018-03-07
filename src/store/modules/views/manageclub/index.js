import * as types from '@/store/mutation-types'
import Vue from 'vue'
let state = {
  mamageclub: {
    clubId: '',
    name: '',
    premit: ''
  }
}

let getters = {
  mamageclub: state => state.mamageclub
}

let mutations = {

  /**
   * 设置社团管理信息
   */
  [types.MANAGECLUB_SET_MANAGECLUB] (state, payload) {
    for (let prop in payload) {
      state.mamageclub[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新社团管理信息
   */
  updateManageclub ({ commit }, payload) {
    commit(types.MANAGECLUB_SET_MANAGECLUB, payload)
  },

  /**
   * 获取社团管理权限信息
   */
  async getManageclubPremit ({ commit, state }) {
    let data = await Vue.wPost('/deal/club/getMyClubPremit.do', {clubId: state.mamageclub.clubId})
    if (data.data) {
      if ([1, 2].indexOf(data.data.premit) > -1) {
        commit(types.MANAGECLUB_SET_MANAGECLUB, {
          name: data.data.name,
          premit: data.data.premit
        })
      }
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
