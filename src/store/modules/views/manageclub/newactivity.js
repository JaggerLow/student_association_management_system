import * as types from '@/store/mutation-types'
import Vue from 'vue'
let state = {
  newactivity: {
    name: '',
    premit: '',
    clubId: '',
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
      place: true,
      description: true
    },
    timeList: [],
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
  },

  /**
   * 设置表单信息
   */
  [types.NEWACTIVITY_SET_FORM] (state, payload) {
    for (let prop in payload) {
      state.newactivity.form[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新创建活动信息
   */
  updateNewactivity ({ commit }, payload) {
    commit(types.NEWACTIVITY_SET_NEWACTIVITY, payload)
  },

  /**
   * 更新表单信息
   */
  updateNewForm ({ commit }, payload) {
    commit(types.NEWACTIVITY_SET_FORM, payload)
  },

  /**
   * 获取社团管理权限信息
   */
  async getManageclubPremit ({ commit, state }) {
    let data = await Vue.wPost('/deal/club/getMyClubPremit.do', {clubId: state.newactivity.clubId})
    if (data.data) {
      commit(types.NEWACTIVITY_SET_NEWACTIVITY, {
        name: data.data.name,
        premit: data.data.premit
      })
      commit(types.NEWACTIVITY_SET_FORM, {
        club: data.data.name
      })
    }
  },

  /**
   * 获取24小时下拉选项
   */
  async getTimes ({ commit }) {
    let data = await Vue.wGet('/listHourMin.do')
    commit(types.NEWACTIVITY_SET_NEWACTIVITY, {
      timeList: data.data.records
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
