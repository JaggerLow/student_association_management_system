import SDialogLogin from './login'
import SDialogNewclub from './newclub'
import SDialogNewdepartment from './newdepartment'
import SDialogNewposition from './newposition'
import SDialogClubdepartment from './clubdepartment'
import SDialogClubposition from './clubposition'
import SDialogClubpermit from './clubpermit'
import SDialogDeletewarning from './deletewarning'
import SDialogUserinfo from './userinfo'

let dialog = {}
dialog.install = Vue => {
  Vue.component(SDialogLogin.name, SDialogLogin)
  Vue.component(SDialogNewclub.name, SDialogNewclub)
  Vue.component(SDialogNewdepartment.name, SDialogNewdepartment)
  Vue.component(SDialogNewposition.name, SDialogNewposition)
  Vue.component(SDialogClubdepartment.name, SDialogClubdepartment)
  Vue.component(SDialogClubposition.name, SDialogClubposition)
  Vue.component(SDialogClubpermit.name, SDialogClubpermit)
  Vue.component(SDialogDeletewarning.name, SDialogDeletewarning)
  Vue.component(SDialogUserinfo.name, SDialogUserinfo)
}

export default dialog
