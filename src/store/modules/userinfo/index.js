import * as types from '@/store/mutation-types'
let state = {
  userinfo: {
    isShow: false,
    userId: '',
    form: {
      username: '凉瓜牛肉饭',
      actualName: '梁宇',
      gender: '男',
      birthday: '1996-02-29',
      nativePlace: '深圳',
      department: '电子系',
      profession: '电子信息工程',
      grade: '嵌入式系统软件开发2班',
      email: '645091114@qq.com',
      phone: '13622323592',
      startYear: '2014',
      qq: '645091114',
      weixin: 'weixin645091114',
      hobbies: '读书，看报',
      selIntroduction: '尻图王',
      image: ''
    }
  }
}

let getters = {
  userinfo: state => state.userinfo
}

let mutations = {

  /**
   * 设置个人信息框信息
   */
  [types.USERINFO_SET_USERINFO] (state, payload) {
    for (let prop in payload) {
      state.userinfo[prop] = payload[prop]
    }
  }
}

let actions = {

  /**
   * 更新个人信息框信息
   */
  updateUserinfo ({ commit }, payload) {
    commit(types.USERINFO_SET_USERINFO, payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
