import * as types from '@/store/mutation-types'
import Vue from 'vue'
let state = {
  activity: {
    clubId: '',
    search: {
      page: 1
    },
    table: [],
    count: 1,
    deleteActivity: {
      isShow: false,
      clubId: '',
      id: ''
    }
  }
}

let getters = {
  activity: state => state.activity
}

let mutations = {

  /**
   * 设置社团活动信息
   */
  [types.ACTIVITY_SET_ACTIVITY] (state, payload) {
    for (let prop in payload) {
      state.activity[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新社团活动信息
   */
  updateActivity ({ commit }, payload) {
    commit(types.ACTIVITY_SET_ACTIVITY, payload)
  },

  /**
   * 获取社团活动列表
   */
  async getActivityList ({ commit, state }) {
    let packageData = {
      clubId: state.activity.clubId,
      page: state.activity.search.page
    }
    let data = await Vue.wPost('/deal/clubActivity/list.do', packageData)
    commit(types.ACTIVITY_SET_ACTIVITY, {
      table: data.data.records,
      count: data.data.pageCount
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
