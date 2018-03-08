import * as types from '@/store/mutation-types'
import Vue from 'vue'
let state = {
  apply: {
    clubId: '',
    loading: false,
    search: {
      keyword: '',
      page: 1
    },
    table: [],
    count: 1
  }
}

let getters = {
  apply: state => state.apply
}

let mutations = {

  /**
   * 设置申请列表信息
   */
  [types.APPLY_SET_APPLY] (state, payload) {
    for (let prop in payload) {
      state.apply[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新申请列表信息
   */
  updateApply ({ commit }, payload) {
    commit(types.APPLY_SET_APPLY, payload)
  },

  /**
   * 获取申请列表信息
   */
  async getApplyList ({ commit, state }) {
    commit(types.APPLY_SET_APPLY, {
      loading: true
    })
    let packageData = {
      clubId: state.apply.clubId,
      keyword: state.apply.search.keyword,
      page: state.apply.search.page
    }
    let data = await Vue.wPost('/deal/clubApply/list.do', packageData)
    for (let item of data.data.records) {
      for (let prop in item) {
        if ([null, ''].indexOf(item[prop]) > -1) {
          item[prop] = '-'
        }
        if (prop === 'gender') {
          item[prop] = item[prop] === 0 ? '男' : '女'
        }
      }
    }
    commit(types.APPLY_SET_APPLY, {
      count: data.data.pageCount,
      table: data.data.records,
      loading: false
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
