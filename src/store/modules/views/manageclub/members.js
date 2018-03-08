import * as types from '@/store/mutation-types'
import Vue from 'vue'
let state = {
  members: {
    clubId: '',
    search: {
      clubDepartment: '',
      position: '',
      keyword: '',
      page: 1
    },
    count: 1,
    table: [],
    clubDepartmentList: [],
    positionList: [],
    isClubdepartShow: false,
    memberId: '',
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
  },

  /**
   * 获取成员信息列表
   */
  async getMemberList ({ commit, state }) {
    let packageData = {
      clubId: state.members.clubId,
      clubDepartment: state.members.search.clubDepartment,
      position: state.members.search.position,
      keyword: state.members.search.keyword,
      page: state.members.search.page
    }
    let data = await Vue.wPost('/deal/club/listMember.do', packageData)
    for (let item of data.data.records) {
      for (let prop in item) {
        if ([null, ''].indexOf(item[prop]) > -1) {
          item[prop] = '-'
        }
      }
    }
    commit(types.MEMBERS_SET_MEMBERS, {
      table: data.data.records,
      count: data.data.pageCount
    })
  },

  /**
   * 获取部门下拉选项
   */
  async getClubDepart ({ commit, state }) {
    let data = await Vue.wPost('/listDepartment.do', {
      clubId: state.members.clubId
    })
    commit(types.MEMBERS_SET_MEMBERS, {
      clubDepartmentList: data.data.records
    })
  },

  /**
   * 获取职位下拉选项
   */
  async getPosition ({ commit, state }) {
    let data = await Vue.wPost('/listPosition.do', {
      clubId: state.members.clubId
    })
    commit(types.MEMBERS_SET_MEMBERS, {
      positionList: data.data.records
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
