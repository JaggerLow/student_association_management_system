import * as types from '@/store/mutation-types'
let state = {
  newclubWindow: {
    isShow: false,
    form: {
      name: '',
      type: '',
      level: ''
    }
  }
}

let getters = {
  newclubWindow: state => state.newclubWindow
}

let mutations = {

  /**
   * 设置创建社团信息
   */
  [types.MYCLUB_SET_NEWCLUBWINDOW] (state, payload) {
    for (let prop in payload) {
      state.newclubWindow[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新创建社团信息
   */
  updateNewclubWindow ({ commit }, payload) {
    commit(types.MYCLUB_SET_NEWCLUBWINDOW, payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
