import * as types from '@/store/mutation-types'
let state = {
  forgetpwd: {
    active: 0,
    waitCode: false,
    waitTime: 60,
    emailForm: {
      email: '',
      code: ''
    }
  }
}

let getters = {
  forgetpwd: state => state.forgetpwd
}

let mutations = {

  /**
   * 设置忘记密码信息
   */
  [types.FORGETPWD_SET_FORGETPWD] (state, payload) {
    for (let prop in payload) {
      state.forgetpwd[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新忘记密码信息
   */
  updateForgetpwd ({ commit }, payload) {
    commit(types.FORGETPWD_SET_FORGETPWD, payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
