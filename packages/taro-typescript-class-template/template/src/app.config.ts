export default {
  pages: [
    'pages/index/index',
    'pages/home/index',
    'pages/mine/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom',
  },
  tabBar: {
    custom: true,
    color: "black",
    selectedColor: "blue",
    backgroundColor: "red",
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页'
      }, {
        pagePath: 'pages/mine/index',
        text: '我的'
      }
    ]
  },
  usingComponents: {}
}
