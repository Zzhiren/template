import Taro from '@tarojs/taro';
import {
  observable,
  action
} from 'mobx'

export default class App implements App.App {
  constructor() {
    this.init()
  }
  @observable userInfo: App.userInfo = {
    /* 用户昵称 */
    nickName: '',
    /* 头像 */
    avatarUrl: '',
    /* 用户所在国家 */
    country: '',
    /* 用户所在省份 */
    province: '',
    /* 用户所在城市 */
    city: '',
    /* 用户性别: 0-未知，1-男，2-女 */
    gender: 0,
    /* 语言 */
    language: '',
  }

  private init () {
    this.setUserInfo(Taro.getStorageSync('userInfo'))
  }

  /**
   * @desc 获取系统信息
   */
  get systemInfo (): App.systemInfo {
    return Taro.getSystemInfoSync();
  }

  /**
   * @desc 是否为刘海屏
   */
  get isLiuHaiPing () {
    return this.systemInfo.statusBarHeight >= 44
  }

  /**
   * @desc 自定义顶部导航样式
   */
  get navStyle (): App.navStyle {
    const menu = Taro.getMenuButtonBoundingClientRect()
    const paddingTop = menu.top + 'px';
    const height = menu.top + menu.height + 8 + 'px';
    return {
      height: height,
      paddingTop: paddingTop,
    }
  }

  /**
   * @desc 主容器样式
   */
  get appStyle () {
    const menu = Taro.getMenuButtonBoundingClientRect()
    const pdt = menu.top - 8 + 'px';
    return {
      paddingTop: pdt,
      boxSizing: 'border-box',
      overflow: 'auto'
    }
  }

  /**
   * @desc 保存userInfo
   */
  @action
  setUserInfo (userInfo: App.userInfo) {
    this.userInfo = {
      ...this.userInfo,
      ...userInfo
    }
  }

}
