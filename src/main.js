import 'font-awesome/css/font-awesome.min.css'
import './styles/index.scss'
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import VueScrollTo from 'vue-scrollto'
import App from './App'
import router from './router'
import store from './store'
import plugins from './plugins'
import components from './components'

Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(plugins)
Vue.use(components)
Vue.use(VueScrollTo)

let vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

Vue.use({
  vm
})
