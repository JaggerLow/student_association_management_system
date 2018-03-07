import * as types from '@/store/mutation-types'
import Vue from 'vue'
let state = {
  clubId: '',
  loading: false,
  info: {
    form: {
      name: '',
      type: '',
      level: '',
      scale: '',
      introduction: '',
      announcement: '',
      logo: ''
    },
    isUploadShow: false,
    mustProp: {
      name: true,
      type: true,
      level: true
    },
    packageData: {}
  }
}

let getters = {
  info: state => state.info
}

let mutations = {

  /**
   * 设置社团基本信息
   */
  [types.BASICINFO_SET_BASICINFO] (state, payload) {
    for (let prop in payload) {
      state.info[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新社团基本信息
   */
  updateBasicinfo ({ commit }, payload) {
    commit(types.BASICINFO_SET_BASICINFO, payload)
  },

  /**
   * 获取社团的基本信息
   */
  async getBasicinfo ({ commit, state }) {
    commit(types.BASICINFO_SET_BASICINFO, {
      loading: true
    })
    let data = await Vue.wPost('/deal/club/get.do', {clubId: state.info.clubId})
    let infoData = {}
    for (let prop in data.data) {
      if (prop !== 'clubId') {
        if (data.data[prop] === null) {
          infoData[prop] = ''
        } else {
          infoData[prop] = data.data[prop]
        }
      }
    }
    commit(types.BASICINFO_SET_BASICINFO, {
      form: infoData,
      loading: false
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
