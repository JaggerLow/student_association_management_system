import * as types from '@/store/mutation-types'
let state = {
  activity: {
    search: {
      page: 1
    },
    table: [{
      id: 1,
      name: '超级无敌圣诞趴',
      startDate: '2018-02-22 9:00',
      endDate: '2018-02-22 18:00',
      place: '广州大学华软软件学院喷泉广场北边院团学摊位'
    }],
    count: 2,
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
