const Home = () => import('../views/overview/home').then(m => m.default)
const Dynamic = () => import('../views/dynamic').then(m => m.default)
const Schedule = () => import('../views/schedule').then(m => m.default)
const Discuss = () => import('../views/discuss').then(m => m.default)
const Registered = () => import('../views/registered').then(m => m.default)
const Info = () => import('../views/info').then(m => m.default)
const Myclub = () => import('../views/myclub').then(m => m.default)
const Manageclub = () => import('../views/manageclub').then(m => m.default)
const ManageclubNewactivity = () => import('../views/manageclub/newactivity').then(m => m.default)
const Club = () => import('../views/club').then(m => m.default)

export default data => {
  // 设置默认路由
  let routes = [
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
    }
  ]

  return routes
}
