let state = {
  album: {
    imageList: [{
      id: 1,
      url: ''
    },
    {
      id: 2,
      url: ''
    }]
  }
}

let getters = {
  album: state => state.album
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
