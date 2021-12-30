import { ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import BaseComponent, { BaseStore } from '@/types/base'
import { swiperItem } from '@/types/components/my-swiper'
import { TaroRouter } from '../router'

export interface HomeProps extends BaseComponent, BaseStore {
  $store: {
    App: App.App
  }
  $router: TaroRouter.Router
}
export interface HomeStates {
  route: TaroRouter.RouteInfo
}


declare const HomeProps: ComponentClass<HomeProps>

export default HomeProps
