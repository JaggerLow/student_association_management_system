let state = {
  form: {
    name: '',
    actualName: '',
    gender: '0',
    birthday: '',
    nativePlace: '',
    department: '',
    profession: '',
    class: '',
    email: '',
    phone: '',
    startYear: '',
    qq: '',
    weixin: '',
    hobbies: '',
    selIntroduction: ''
  }
}

let getters = {
  form: state => state.form
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
