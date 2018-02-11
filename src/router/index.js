import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from '../store'
import dynamicRoute from './routes'

let router = new Router({
  mode: 'history',
  routes: []
})

Vue.use(Router)
sync(store, router)

router.onReady(async () => {
  router.addRoutes(dynamicRoute())
})

export default router
