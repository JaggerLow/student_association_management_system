import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from '../store'
import routes from './routes'

let router = new Router({
  mode: 'history',
  routes
})

Vue.use(Router)
sync(store, router)

router.beforeEach(async (to, from, next) => {
  store.dispatch('checkLogin')
  let nowPath = to.path
  nowPath = nowPath.split('/')
  nowPath = nowPath[1]
  if (nowPath === 'registered' || nowPath === 'forgetpwd') {
    store.dispatch('setInfoShow', false)
  } else {
    store.dispatch('setInfoShow', true)
  }
  store.dispatch('setHeaderNav', nowPath)
  next()
})
// router.onReady(async () => {
//   router.addRoutes(dynamicRoute())
// })

export default router
