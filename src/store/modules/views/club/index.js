import * as types from '@/store/mutation-types'
import Vue from 'vue'
let state = {
  club: {
    clubId: '',
    info: {
      name: '',
      clubId: '',
      type: '',
      level: '',
      introduction: '',
      announcement: '',
      logo: '',
      isMember: false,
      activityList: [],
      albumList: [],
      memberList: []
    }
  }
}

let getters = {
  club: state => state.club
}

let mutations = {

  /**
   * 设置社团首页信息
   */
  [types.CLUB_SET_CLUB] (state, payload) {
    for (let prop in payload) {
      state.club[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新社团首页信息
   */
  updateClub ({ commit }, payload) {
    commit(types.CLUB_SET_CLUB, payload)
  },

  /**
   * 获取社团首页展示信息
   */
  async getClub ({ commit, state }, payload) {
    let data = await Vue.wGet('/unlimited/club/get.do', {clubId: state.club.clubId})
    commit(types.CLUB_SET_CLUB, {
      info: data.data
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
