import * as types from '@/store/mutation-types'
let state = {
  myclub: {
    list: [{
      name: '社团名称',
      clubId: 100001,
      logo: '',
      introduction: '这是一个社团介绍~~~',
      premit: '1'
    }],
    page: 1,
    count: 2,
    leaveWindow: {
      isShow: false,
      clubId: ''
    },
    dissolveWindow: {
      isShow: false,
      clubId: ''
    }
  }
}

let getters = {
  myclub: state => state.myclub
}

let mutations = {

  /**
   * 设置我的社团信息
   */
  [types.MYCLUB_SET_MYCLUB] (state, payload) {
    for (let prop in payload) {
      state.myclub[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新我的社团信息
   */
  updateMyclub ({ commit }, payload) {
    commit(types.MYCLUB_SET_MYCLUB, payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
