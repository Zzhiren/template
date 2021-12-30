import Router from './router'

export default new Router([
  // demo demo demo demo
  // {
  //   name: 'employeeCard',
  //   url: 'pages/user/employeeCard/employeeCard',
  //   back: true, // 是否显示返回按钮
  //   redirect: 'user', // 找不到当前页面时重定向页面，name或url
  //   meta: {
  //     title: '工作证'
  //   },
  //   nav: {
  //     background: '#000000', // 背景色
  //     color: '#FFFFFF', // 文字图标颜色
  //   }
  // }
  {
    name: 'home',
    url: 'pages/home/index',
    tabBar: true,
    meta: {
      title: '首页'
    }
  },
  {
    name: 'mine',
    url: 'pages/mine/index',
    tabBar: true,
    meta: {
      title: '我的'
    }
  }
], 'home')
