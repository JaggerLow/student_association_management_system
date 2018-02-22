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
    }]
  }
}

let getters = {
  architecture: state => state.architecture
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
