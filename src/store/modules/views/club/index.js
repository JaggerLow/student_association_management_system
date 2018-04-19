import * as types from '@/store/mutation-types'
import Vue from 'vue'
import { cloneDeep } from 'lodash'
let state = {
  image: {
    show: false,
    url: '',
    index: 0,
    list: []
  },
  club: {
    clubId: '',
    info: {
      name: '',
      clubId: '',
      type: '',
      level: '',
      introduction: '',
      announcement: '',
      logo: '',
      isMember: false,
      activityList: [],
      albumList: [],
      memberList: []
    }
  }
}

let getters = {
  club: state => state.club,
  image: state => state.image
}

let mutations = {

  /**
   * 设置社团首页信息
   */
  [types.CLUB_SET_CLUB] (state, payload) {
    for (let prop in payload) {
      state.club[prop] = payload[prop]
    }
  },

  /**
   * 设置社团首页图片
   */
  [types.CLUB_SET_IMAGE] (state, payload) {
    for (let prop in payload) {
      state.image[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新社团首页信息
   */
  updateClub ({ commit }, payload) {
    commit(types.CLUB_SET_CLUB, payload)
  },

  /**
   * 更新社团首页图片
   */
  updateImage ({ commit }, payload) {
    commit(types.CLUB_SET_IMAGE, payload)
  },

  /**
   * 获取社团首页展示信息
   */
  async getClub ({ commit, state }, payload) {
    let data = await Vue.wGet('/unlimited/club/get.do', {clubId: state.club.clubId})
    commit(types.CLUB_SET_IMAGE, {
      list: cloneDeep(data.data.albumList)
    })
    data.data.albumList = data.data.albumList.splice(0, 6)
    commit(types.CLUB_SET_CLUB, {
      info: data.data
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
