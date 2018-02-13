import SHeader from './header'
import dialog from './dialog'
import SFooter from './footer'

let components = {}
components.install = Vue => {
  Vue.use(SHeader)
  Vue.use(dialog)
  Vue.use(SFooter)
}

export default components
