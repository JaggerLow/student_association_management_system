import * as types from '@/store/mutation-types'
import Vue from 'vue'
let state = {
  info: {
    form: {
      username: '',
      actualName: '',
      gender: 0,
      birthday: '',
      nativePlace: '',
      department: '',
      profession: '',
      grade: '',
      email: '',
      phone: '',
      startYear: '',
      qq: '',
      weixin: '',
      hobbies: '',
      selIntroduction: '',
      image: ''
    },
    isUploadShow: false,
    mustProp: {
      username: true
    },
    packageData: {}
  }
}

let getters = {
  info: state => state.info
}

let mutations = {

  /**
   * 设置个人信息
   */
  [types.INFO_SET_INFO] (state, payload) {
    for (let prop in payload) {
      state.info[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新社团架构信息
   */
  updateInfo ({ commit }, payload) {
    commit(types.INFO_SET_INFO, payload)
  },

  /**
   * 获取个人信息
   */
  async getInfo ({ dispatch, commit }) {
    let data = await Vue.wGet('/deal/getUserDetail.do')
    for (let prop in data.data) {
      if (data.data[prop] === null) {
        data.data[prop] = ''
      }
    }
    commit(types.INFO_SET_INFO, {form: data.data})
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
