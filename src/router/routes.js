const Home = () => import('../views/overview/home').then(m => m.default)

export default data => {
  // 设置默认路由
  let routes = [
    {
      path: '/home',
      name: Home.name,
      component: Home
    }
  ]

  return routes
}
