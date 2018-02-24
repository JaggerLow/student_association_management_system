import SHeader from './header'
import dialog from './dialog'
import SFooter from './footer'
import SPagefooter from './pagefooter'
import SImageUpload from './imageupload'

let components = {}
components.install = Vue => {
  Vue.use(SHeader)
  Vue.use(dialog)
  Vue.use(SFooter)
  Vue.use(SPagefooter)
  Vue.use(SImageUpload)
}

export default components
