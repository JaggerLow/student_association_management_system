let state = {
  activity: {
    search: {
      page: 1
    },
    table: [{
      name: '超级无敌圣诞趴',
      startDate: '2018-02-22 9:00',
      endDate: '2018-02-22 18:00',
      place: '广州大学华软软件学院喷泉广场北边院团学摊位'
    }],
    count: 2
  }
}

let getters = {
  activity: state => state.activity
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
