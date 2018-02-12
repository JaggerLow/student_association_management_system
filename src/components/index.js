import SHeader from './header'
import dialog from './dialog'

let components = {}
components.install = Vue => {
  Vue.use(SHeader)
  Vue.use(dialog)
}

export default components
