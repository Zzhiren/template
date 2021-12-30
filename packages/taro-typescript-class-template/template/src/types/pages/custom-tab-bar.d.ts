import { ComponentClass } from 'react'
import BaseComponent from '@/types/base'
import { TaroRouter } from '../router'

interface tab {
  label: string
  icon: string
  name: string
  activeClass: string
}

export interface CustomTabBarStates {
  tabs: tab[]
  active: string
}

export interface CustomTabBarProps extends BaseComponent {
  $router: TaroRouter.Router
}

declare const CustomTabBarProps: ComponentClass<CustomTabBarProps>

export default CustomTabBarProps
