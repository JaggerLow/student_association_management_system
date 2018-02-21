import SDialogLogin from './login'
import SDialogNewclub from './newclub'

let dialog = {}
dialog.install = Vue => {
  Vue.component(SDialogLogin.name, SDialogLogin)
  Vue.component(SDialogNewclub.name, SDialogNewclub)
}

export default dialog
