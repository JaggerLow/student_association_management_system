import api from './api'

let plugins = {}
plugins.install = Vue => {
  Vue.use(api)
}

export default plugins
