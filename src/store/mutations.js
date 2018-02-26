import * as types from './mutation-types'

export default {

  /**
   * 设置菜单选择状态
   */
  [types.HEADER_SET_BOTTOMLINE] (state, payload) {
    for (let item of state.headerNav) {
      if (payload === item.ename) {
        item.focus = true
      } else {
        item.focus = false
      }
    }
  },

  /**
   * 设置右上角信息栏展示状态
   */
  [types.HEADER_SET_INFOSHOW] (state, payload) {
    state.isShowInfo = payload
  }
}
