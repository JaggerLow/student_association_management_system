import * as types from '@/store/mutation-types'
import Vue from 'vue'
let state = {
  architecture: {
    clubId: '',
    clubDepartment: [],
    position: [],
    isDepartShow: false,
    departForm: {
      name: ''
    },
    isPositionShow: false,
    positionForm: {
      name: ''
    }
  }
}

let getters = {
  architecture: state => state.architecture
}

let mutations = {

  /**
   * 设置社团架构信息
   */
  [types.ARCHITECTURE_SET_ARCHITECTURE] (state, payload) {
    for (let prop in payload) {
      state.architecture[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新社团架构信息
   */
  updateArchitecture ({ commit }, payload) {
    commit(types.ARCHITECTURE_SET_ARCHITECTURE, payload)
  },

  /**
   * 获取部门架构列表
   */
  async getClubDepartment ({ commit, state }) {
    let data = await Vue.wPost('/deal/club/listDepartment.do', {clubId: state.architecture.clubId})
    commit(types.ARCHITECTURE_SET_ARCHITECTURE, {
      clubDepartment: data.data.records
    })
  },

  /**
   * 获取职位架构列表
   */
  async getPosition ({ commit, state }) {
    let data = await Vue.wPost('/deal/club/listPosition.do', {clubId: state.architecture.clubId})
    commit(types.ARCHITECTURE_SET_ARCHITECTURE, {
      position: data.data.records
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
