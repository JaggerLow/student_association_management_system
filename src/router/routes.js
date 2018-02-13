const Home = () => import('../views/overview/home').then(m => m.default)
const Dynamic = () => import('../views/dynamic').then(m => m.default)
const Schedule = () => import('../views/schedule').then(m => m.default)

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
    }
  ]

  return routes
}
