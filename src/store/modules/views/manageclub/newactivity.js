let state = {
  newactivity: {
    form: {
      type: '',
      title: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      poster: '',
      place: '',
      club: '',
      description: ''
    }
  }
}

let getters = {
  newactivity: state => state.newactivity
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
