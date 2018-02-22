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
    }]
  }
}

let getters = {
  members: state => state.members
}

let mutations = {}

let actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
