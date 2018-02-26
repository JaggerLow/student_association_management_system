import * as types from '@/store/mutation-types'
let state = {
  newactivity: {
    form: {
      type: '',
      title: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      poster: '',
      place: '',
      club: '',
      description: ''
    },
    mustProp: {
      type: true,
      title: true,
      startDate: true,
      startTime: true,
      endDate: true,
      endTime: true,
      // poster: true,
      place: true,
      description: true
    },
    timeList: [
      '00:00',
      '00:30',
      '01:00'
    ],
    packageData: {}
  }
}

let getters = {
  newactivity: state => state.newactivity
}

let mutations = {

  /**
   * 设置创建活动信息
   */
  [types.NEWACTIVITY_SET_NEWACTIVITY] (state, payload) {
    for (let prop in payload) {
      state.newactivity[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新创建活动信息
   */
  updateNewactivity ({ commit }, payload) {
    commit(types.NEWACTIVITY_SET_NEWACTIVITY, payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
