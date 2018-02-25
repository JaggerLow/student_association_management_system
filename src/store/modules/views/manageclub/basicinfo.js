import * as types from '@/store/mutation-types'
let state = {
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
