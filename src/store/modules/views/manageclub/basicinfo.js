let state = {
  info: {
    form: {
      name: '',
      type: '',
      level: '',
      scale: '1',
      introduction: '',
      announcement: '',
      logo: ''
    }
  }
}

let getters = {
  info: state => state.info
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
