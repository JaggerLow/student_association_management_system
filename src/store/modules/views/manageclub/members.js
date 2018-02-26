import * as types from '@/store/mutation-types'
let state = {
  members: {
    search: {
      clubDepartment: '',
      position: '',
      name: '',
      page: 1
    },
    count: 2,
    table: [{
      name: '梁宇',
      clubDepartment: '宣传部',
      userId: 1230456,
      position: '部长',
      department: '电子系',
      startYear: '2014',
      phone: '13622323592',
      qq: '645091114'
    }],
    clubDepartmentList: [{
      name: '宣传部',
      id: '1'
    },
    {
      name: '外联部',
      id: '2'
    }],
    positionList: [{
      name: '主席',
      id: '1'
    },
    {
      name: '部长',
      id: '2'
    }],
    isClubdepartShow: false,
    clubdepartForm: {
      id: ''
    },
    isPositionShow: false,
    positionForm: {
      id: ''
    },
    isPermitShow: false,
    permitForm: {
      permit: ''
    },
    deleteMember: {
      isShow: false,
      clubId: '',
      userId: ''
    }
  }
}

let getters = {
  members: state => state.members
}

let mutations = {

  /**
   * 设置社团成员信息
   */
  [types.MEMBERS_SET_MEMBERS] (state, payload) {
    for (let prop in payload) {
      state.members[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新社团成员信息
   */
  updateMembers ({ commit }, payload) {
    commit(types.MEMBERS_SET_MEMBERS, payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
