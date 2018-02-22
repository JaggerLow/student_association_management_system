import * as types from '@/store/mutation-types'
let state = {
  loginWindow: {
    isShow: false,
    form: {
      email: '',
      password: '',
      remember: false
    }
  }
}

let getters = {
  loginWindow: state => state.loginWindow
}

let mutations = {

  /**
   * 设置登录框信息
   */
  [types.LOGIN_SET_LOGINWINDOW] (state, payload) {
    for (let prop in payload) {
      state.loginWindow[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新登陆框信息
   */
  updateLoginWindow ({ commit }, payload) {
    commit(types.LOGIN_SET_LOGINWINDOW, payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
