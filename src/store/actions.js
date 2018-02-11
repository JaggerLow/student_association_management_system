import * as types from './mutation-types'

export default {

  /**
   * 设置导航栏focus状态
   */
  setHeaderNav ({ commit }, payload) {
    commit(types.HEADER_SET_BOTTOMLINE, payload)
  }
}
