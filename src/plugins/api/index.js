/**
 * usage：
 * 1. 引用插件 import api from 'path/to/api'
 * 2. 注册插件 Vue.use(api)
 * 3. 在组件中使用 this.$wGet/this.$wPost
 * 4. 在非组件区域使用 Vue.wGet/Vue.wPost
 */

import router from '../../router'
import ElementUI from 'element-ui'
import { assign } from 'lodash'

let plugin = {}
plugin.install = Vue => {
  /**
   * http GET
   * @param {String} uri 请求链接
   * @param {Object} query 请求参数
   * @param {Function} prev 返回数据预处理函数
   */
  Vue.prototype.$wGet = (uri, params = {}, prev = data => data) => {
    params = assign({}, {
      customId: router.currentRoute.query.id,
      _: Number(new Date())
    }, params)
    return new Promise((resolve, reject) => {
      Vue.http.get(uri, { params: params }, {
        emulateJSON: true
      }).then(response => {
        if (typeof response.body === 'string') {
          response.body = JSON.parse(response.body)
        }
        response.body = prev(response.body)
        if (verify(response.body)) {
          resolve(response.body)
        }
      }, response => {
        error(response)
        reject(response)
      })
    })
  }

  /**
   * http POST
   * @param {String} uri 请求链接
   * @param {Object} params 请求参数
   * @param {Function} prev 返回数据预处理函数
   */
  Vue.prototype.$wPost = (uri, params = {}, prev = data => data) => {
    params = assign({}, {
      customId: router.currentRoute.query.id,
      _: Number(new Date())
    }, params)
    return new Promise((resolve, reject) => {
      Vue.http.post(uri, params, {
        emulateJSON: true,
        emulateHTTP: true
      }).then(response => {
        if (typeof response.body === 'string') {
          response.body = JSON.parse(response.body)
        }
        response.body = prev(response.body)
        if (verify(response.body)) {
          resolve(response.body)
        }
      }, response => {
        error(response)
        reject(response)
      })
    })
  }

  Vue.wGet = Vue.prototype.$wGet
  Vue.wPost = Vue.prototype.$wPost
}

/**
 * 统一处理接口返回的字段
 * @param {Object} response 服务器的返回值
 * @returns {Boolean} true：通过处理，执行回调，false：没通过处理，执行特定步骤，不执行回调
 */
function verify (response) {
  if (response.code >= 200 && response.code <= 299) {
    return true
  }
  switch (response.code) {
    case 100:
      location.href = '/home'
      break
    case 101:
      ElementUI.Message('当前无权限访问该页面')
      break
    case 300:
      location.href = response.data
      break
    case 301:
      ElementUI.MessageBox.alert(response.message, '系统提示', {
        confirmButtonText: '确定',
        callback (action) {
          if (action === 'confirm') {
            location.href = response.data
          }
        }
      })
      break
    case 400:
      ElementUI.Message.error(response.message)
      break
    case 500:
      ElementUI.Message.error('服务器异常')
      break
    case 501:
      ElementUI.Message.error('服务器停机维护')
      break
    default:
      ElementUI.Message.error('当前服务器返回了一个未定义的状态码')
      break
  }
  return false
}

/**
 * 统一处理接口请求异常
 */
function error (e) {
  ElementUI.Message('接口请求异常')
  console.error(e)
}

export default plugin
