import * as types from '@/store/mutation-types'
import Vue from 'vue'
let state = {
  myclub: {
    list: [],
    page: 1,
    count: 0,
    loading: false,
    leaveWindow: {
      isShow: false,
      clubId: ''
    },
    dissolveWindow: {
      isShow: false,
      clubId: ''
    }
  }
}

let getters = {
  myclub: state => state.myclub
}

let mutations = {

  /**
   * 设置我的社团信息
   */
  [types.MYCLUB_SET_MYCLUB] (state, payload) {
    for (let prop in payload) {
      state.myclub[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新我的社团信息
   */
  updateMyclub ({ commit }, payload) {
    commit(types.MYCLUB_SET_MYCLUB, payload)
  },

  /**
   * 获取社团列表
   */
  async getClubList ({ commit, state }) {
    commit(types.MYCLUB_SET_MYCLUB, {
      loading: true
    })
    let data = await Vue.wGet('/deal/club/listMyClub.do', {page: state.myclub.page})
    if (data.data) {
      commit(types.MYCLUB_SET_MYCLUB, {
        list: data.data.records,
        count: data.data.pageCount,
        loading: false
      })
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
