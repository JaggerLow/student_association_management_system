import * as types from '@/store/mutation-types'
let state = {
  info: {
    form: {
      name: '',
      actualName: '',
      gender: '0',
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
    isUploadShow: false
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
