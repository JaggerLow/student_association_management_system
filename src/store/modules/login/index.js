import * as types from '@/store/mutation-types'
let state = {
  loginWindow: {
    isShow: false,
    form: {
      username: '',
      password: '',
      remember: false
    }
  }
}

let getters = {
  loginWindow: state => state.loginWindow
}

let mutations = {
  [types.LOGIN_SET_LOGINWINDOW] (state, payload) {
    for (let prop in payload) {
      state.loginWindow[prop] = payload[prop]
    }
  }
}

let actions = {
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
