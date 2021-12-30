import { ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import BaseComponent, { BaseStore } from '@/types/base'

export interface NavProps extends BaseComponent, BaseStore {
  onClick?: CommonEventFunction
  /* 标题 */
  title?: string
  /* 是否显示home按钮 */
  home?: boolean
  /* 是否显示返回按钮 */
  back?: boolean


}

declare const NavProps: ComponentClass<NavProps>

export default NavProps
