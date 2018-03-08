import * as types from '@/store/mutation-types'
import Vue from 'vue'
let state = {
  dynamic: {
    loading: false,
    clubSearch: {
      page: 1,
      sort: ''
    },
    clubList: [],
    clubCount: 1
  }
}

let getters = {
  dynamic: state => state.dynamic
}

let mutations = {

  /**
   * 设置社团动态信息
   */
  [types.DYNAMIC_SET_DYNAMIC] (state, payload) {
    for (let prop in payload) {
      state.dynamic[prop] = payload[prop]
    }
  },

  /**
   * 设置社团列表搜索条件
   */
  [types.DYNAMIC_SET_CLUBSEARCH] (state, payload) {
    for (let prop in payload) {
      state.dynamic.clubSearch[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新社团动态信息
   */
  updataDynamic ({ commit }, payload) {
    commit(types.DYNAMIC_SET_DYNAMIC, payload)
  },

  /**
   * 更新社团列表搜索条件
   */
  updateClubSearch ({ commit }, payload) {
    commit(types.DYNAMIC_SET_CLUBSEARCH, payload)
  },

  /**
   * 获取社团列表
   */
  async getClubList ({ commit, state }) {
    commit(types.DYNAMIC_SET_DYNAMIC, {
      loading: true
    })
    let data = await Vue.wGet('/unlimited/club/list.do', state.dynamic.clubSearch)
    let packageData = {
      clubCount: data.data.pageCount,
      clubList: data.data.records,
      loading: false
    }
    commit(types.DYNAMIC_SET_DYNAMIC, packageData)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
