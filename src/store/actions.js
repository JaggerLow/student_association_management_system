import * as types from './mutation-types'
import Vue from 'vue'

export default {

  /**
   * 设置导航栏focus状态
   */
  setHeaderNav ({ commit }, payload) {
    commit(types.HEADER_SET_BOTTOMLINE, payload)
  },

  /**
   * 设置右上角信息栏展示状态
   */
  setInfoShow ({ commit }, payload) {
    commit(types.HEADER_SET_INFOSHOW, payload)
  },

  /**
   * 登录状态校验
   */
  async checkLogin ({ dispatch, commit }) {
    let data = await Vue.wPost('/checkLogin.do')
    let userInfo = {
      username: '',
      userId: '',
      isMaster: false,
      isLogin: false
    }
    if (data.data) {
      userInfo.username = data.data.username
      userInfo.userId = data.data.userId
      userInfo.isMaster = data.data.isMaster
      userInfo.isLogin = true
    }
    dispatch('updateUserInfo', userInfo)
  },

  /**
   * 更新用户信息
   */
  updateUserInfo ({ commit }, payload) {
    commit(types.HEADER_SET_USERINFO, payload)
  }
}
