import * as types from '@/store/mutation-types'
let state = {
  architecture: {
    clubDepartment: [{
      name: '宣传部',
      id: 1
    },
    {
      name: '技术部',
      id: 2
    },
    {
      name: '秘书处',
      id: 3
    }],
    position: [{
      name: '主席',
      id: 1
    },
    {
      name: '副主席',
      id: 2
    },
    {
      name: '会长',
      id: 3
    },
    {
      name: '副会长',
      id: 4
    },
    {
      name: '部长',
      id: 5
    },
    {
      name: '副部长',
      id: 6
    },
    {
      name: '干事',
      id: 7
    }],
    isDepartShow: false,
    departForm: {
      name: ''
    },
    isPositionShow: false,
    positionForm: {
      name: ''
    }
  }
}

let getters = {
  architecture: state => state.architecture
}

let mutations = {

  /**
   * 设置社团架构信息
   */
  [types.ARCHITECTURE_SET_ARCHITECTURE] (state, payload) {
    for (let prop in payload) {
      state.architecture[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新社团架构信息
   */
  updateArchitecture ({ commit }, payload) {
    commit(types.ARCHITECTURE_SET_ARCHITECTURE, payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
