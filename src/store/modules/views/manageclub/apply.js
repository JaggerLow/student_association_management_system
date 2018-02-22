let state = {
  apply: {
    search: {
      name: '',
      page: 1
    },
    table: [{
      name: '梁宇',
      gender: '男',
      department: '电子系',
      startYear: '2014',
      phone: '13622323592',
      qq: '645091114',
      weixin: 'weixin645091114'
    }],
    count: 2
  }
}

let getters = {
  apply: state => state.apply
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
