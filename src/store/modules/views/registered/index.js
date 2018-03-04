import * as types from '@/store/mutation-types'
let state = {
  registered: {
    form: {
      username: '',
      email: '',
      password: '',
      checkpassword: '',
      code: ''
    },
    mustProp: {
      username: true,
      email: true,
      password: true,
      checkpassword: true,
      code: true
    },
    packageData: {},
    waitCode: false,
    waitTime: 60
  }
}

let getters = {
  registered: state => state.registered
}

let mutations = {

  /**
   * 设置用户注册信息
   */
  [types.REGISTERED_SET_REGISTERED] (state, payload) {
    for (let prop in payload) {
      state.registered[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新用户注册信息
   */
  updateRegistered ({ commit }, payload) {
    commit(types.REGISTERED_SET_REGISTERED, payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
