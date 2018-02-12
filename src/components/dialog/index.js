import SDialogLogin from './login'

let dialog = {}
dialog.install = Vue => {
  Vue.component(SDialogLogin.name, SDialogLogin)
}

export default dialog
