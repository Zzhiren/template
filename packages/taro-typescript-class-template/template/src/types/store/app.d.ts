declare namespace App {
  interface App {
    /* 微信授权信息 */
    userInfo: userInfo
    /* 系统信息 */
    systemInfo: systemInfo
    /* 自定义nav样式 */
    navStyle: navStyle
    /* 是否刘海屏 */
    isLiuHaiPing: boolean

    /* 更新userInfo */
    setUserInfo: (userInfo: userInfo) => void
  }

  interface userInfo {
    /* 用户昵称 */
    nickName: string
    /* 头像 */
    avatarUrl: string
    /* 用户所在国家 */
    country: string
    /* 用户所在省份 */
    province: string
    /* 用户所在城市 */
    city: string
    /* 用户性别: 0-未知，1-男，2-女 */
    gender: number
    /* 语言 */
    language: string


  }

  interface systemInfo {
    /* 设备品牌 */
    brand: string
    /* 设备型号。新机型刚推出一段时间会显示unknown，微信会尽快进行适配。*/
    model: string
    /* 微信版本号 */
    version: string
    /* 操作系统及版本 */
    system: string
    /* 客户端平台 */
    platform: string
    /* 客户端基础库版本 */
    SDKVersion: string
    /* 状态栏的高度 */
    statusBarHeight: number
    /* 屏幕宽度 */
    screenWidth: number
  }

  interface navStyle {
    height: string
    paddingTop: string
  }
}
