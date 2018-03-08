import * as types from '@/store/mutation-types'
import Vue from 'vue'
let state = {
  album: {
    clubId: '',
    page: 1,
    count: 1,
    imageList: []
  }
}

let getters = {
  album: state => state.album
}

let mutations = {

  /**
   * 设置社团相簿信息
   */
  [types.ALBUM_SET_ALBUM] (state, payload) {
    for (let prop in payload) {
      state.album[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新社团相册信息
   */
  updateAlbum ({ commit }, payload) {
    commit(types.ALBUM_SET_ALBUM, payload)
  },

  /**
   * 获取社团相册列表
   */
  async getAlbumList ({ commit, state }) {
    let packageData = {
      clubId: state.album.clubId,
      page: state.album.page
    }
    let data = await Vue.wPost('/deal/clubPhoto/list.do', packageData)
    commit(types.ALBUM_SET_ALBUM, {
      count: data.data.pageCount,
      imageList: data.data.records
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
