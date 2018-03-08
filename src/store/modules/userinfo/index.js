import * as types from '@/store/mutation-types'
import Vue from 'vue'
let state = {
  userinfo: {
    isShow: false,
    userId: '',
    form: {
      username: '',
      actualName: '',
      gender: '',
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
    }
  }
}

let getters = {
  userinfo: state => state.userinfo
}

let mutations = {

  /**
   * 设置个人信息框信息
   */
  [types.USERINFO_SET_USERINFO] (state, payload) {
    for (let prop in payload) {
      state.userinfo[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新个人信息框信息
   */
  updateUserinfo ({ commit }, payload) {
    commit(types.USERINFO_SET_USERINFO, payload)
  },

  /**
   * 获取个人信息
   */
  async getUserInfo ({ commit }, payload) {
    let data = await Vue.wPost('/unlimited/user/getUserDetail.do', {
      userId: payload
    })
    for (let prop in data.data) {
      if ([null, ''].indexOf(data.data[prop]) > -1 && prop !== 'image') {
        data.data[prop] = '-'
      } else {
        if (prop === 'selIntroduction') {
          data.data[prop] = data.data[prop].replace(/\n/g, '<br/>')
        }
      }
    }
    commit(types.USERINFO_SET_USERINFO, {
      form: data.data
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
