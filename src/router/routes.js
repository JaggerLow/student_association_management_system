import Home from '../views/overview/home'
import Dynamic from '../views/dynamic'
import Schedule from '../views/schedule'
import Discuss from '../views/discuss'
import Registered from '../views/registered'
import Forgetpwd from '../views/forgetpwd'
import Info from '../views/info'
import Myclub from '../views/myclub'
import Manageclub from '../views/manageclub'
import ManageclubNewactivity from '../views/manageclub/newactivity'
import Club from '../views/club'

export default [
  {
    path: '/home',
    name: Home.name,
    component: Home
  },
  {
    path: '/dynamic',
    name: Dynamic.name,
    component: Dynamic
  },
  {
    path: '/schedule',
    name: Schedule.name,
    component: Schedule
  },
  {
    path: '/discuss',
    name: Discuss.name,
    component: Discuss
  },
  {
    path: '/registered',
    name: Registered.name,
    component: Registered
  },
  {
    path: '/forgetpwd',
    name: Forgetpwd.name,
    component: Forgetpwd
  },
  {
    path: '/info',
    name: Info.name,
    component: Info
  },
  {
    path: '/myclub',
    name: Myclub.name,
    component: Myclub
  },
  {
    path: '/club',
    name: Club.name,
    component: Club
  },
  {
    path: '/manageclub',
    name: Manageclub.name,
    component: Manageclub
  },
  {
    path: '/manageclub/newactivity',
    name: ManageclubNewactivity.name,
    component: ManageclubNewactivity
  },
  {
    path: '/',
    redirect: '/home'
  }
]
