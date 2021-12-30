import Taro from '@tarojs/taro';
import { TaroRouter } from '@/types/router';

export default class Router implements TaroRouter.Router{
  public active: string;
  private routes: TaroRouter.Route[] = [];
  private routeMap: TaroRouter.RouteMap = {};

  constructor (routes: TaroRouter.Route[], active: string) {
    this.routes = routes;
    this.active = active;
    this.init();
  }

  private init() {
    this.routes.forEach((v: TaroRouter.Route) => {
      // 默认不显示返回按钮
      if (!v.back) {
        v.back = false;
      }

      if (!v.nav) {
        v.nav = {};
      }

      if (!v.redirect) {
        v.redirect = '';
      }

      if (!v.tabBar) {
        v.tabBar = false;
      }


      if (Object.keys(this.routeMap).indexOf(v.name) === -1) {
        this.routeMap[v.name] = v;
      } else {
        throw new Error(`路由name重复:${v.name}`);
      }

      if (Object.keys(this.routeMap).indexOf(v.url) === -1) {
        this.routeMap[v.url] = v;
      } else {
        throw new Error(`路由url重复:${v.url}`);
      }
    });
  }

  /**
   * @desc 路由跳转
   * @param options
   * @returns
   */
  public async push (options: TaroRouter.Options) {
    let route: TaroRouter.Route;

    const _push = (route: TaroRouter.Route, type: keyof { navigateTo, reLaunch, redirectTo } = 'navigateTo') => {
      console.log('route', route);
      // 禁用分享按钮
      Taro.hideShareMenu({
        success: function (res) {
          console.log(`${options.name}禁用成功`, res, options.name);
        },
        fail: function (err) {
          console.log(err);
          console.log(`${options.name}禁用失败`);
        }
      });

      return new Promise((resolve, reject) => {
        // 判断是否tabbar页面
        if (route.tabBar) {
          Taro.switchTab({
            url: `/${route.url}`,
            success (res) {
              resolve(res);
            },
            fail (err) {
              reject(err);
              throw new Error(`路由跳转失败err: ${err.toString()}`);
            }
          });
        } else {
          let queryStr = '';
          if (!!options.query && Object.prototype.toString.call(options.query) === '[object Object]') {
            // @ts-ignore
            queryStr = Object.keys(options.query).map(key => `${key}=${options.query[key]}`).join('&');
          }
          Taro[type]({
            url: queryStr ? `/${route.url}?${queryStr}` : `/${route.url}`,
            success (res) {
              resolve(res);
            },
            fail (err) {
              reject(err);
              throw new Error(`路由跳转失败err: ${err.toString()}`);
            }
          });
        }
      });
    };

    if (!options || Object.prototype.toString.call(options) !== '[object Object]') {
      throw new Error('$router.push(options)缺少options(Object)参数');
    }

    // 判断是否有提供name或url参数
    if (options.name && this.routeMap.hasOwnProperty(options.name)) {
      console.log('a')
      route = this.routeMap[options.name];
      await _push(route);
    } else if (options.url && this.routeMap.hasOwnProperty(options.url)) {
      console.log('b')
      route = this.routeMap[options.url];
      await _push(route);
    } else {
      throw new Error(`options中缺少路由参数name或url, options:${JSON.stringify(options)}`);
    }
  }

  public async back() {
    /** 获取原生路由栈 */
    return new Promise((resolve, reject) => {
      Taro.navigateBack({
        success (res) {
          resolve(res);
        },
        fail (err) {
          reject(err);
          throw new Error(`Taro.navigateBack 失败${err.toString()}`);
        }
      });
    });
  }

  /**
   * @desc 保存选中tabbar标识
   */
  public setActive (active: string) {
    this.active = active
  }

  get route() {
    const pageArr = Taro.getCurrentPages();
    const page = pageArr[pageArr.length-1];
    return {
      navigationBarTitleText: page.config.navigationBarTitleText,
      query: page.options,
      ...this.routeMap[page.route]
    };
  }
}