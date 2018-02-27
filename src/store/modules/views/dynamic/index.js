import * as types from '@/store/mutation-types'
let state = {
  dynamic: {
    clubSearch: {
      page: 1,
      sort: ''
    },
    clubList: [{
      name: '社团名称',
      clubId: 100001,
      logo: '',
      introduction: '这是一则社团简介',
      createDate: '2018-02-27',
      scale: 1,
      level: '校级组织'
    },
    {
      name: '社团名称',
      clubId: 100001,
      logo: '',
      introduction: '这是一则社团简介',
      createDate: '2018-02-27',
      scale: 1,
      level: '校级组织'
    },
    {
      name: '社团名称',
      clubId: 100001,
      logo: '',
      introduction: '这是一则社团简介',
      createDate: '2018-02-27',
      scale: 1,
      level: '校级组织'
    }],
    clubCount: 2
  }
}

let getters = {
  dynamic: state => state.dynamic
}

let mutations = {

  /**
   * 设置社团列表搜索条件
   */
  [types.DYNAMIC_SET_CLUBSEARCH] (state, payload) {
    for (let prop in payload) {
      state.dynamic.clubSearch[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新社团列表搜索条件
   */
  updateClubSearch ({ commit }, payload) {
    commit(types.DYNAMIC_SET_CLUBSEARCH, payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
