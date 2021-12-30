import { ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import BaseComponent from '@/types/base'

export interface AvatarProps extends BaseComponent {
  /* 头像大小 */
  size: number | string
  /* 头像地址 */
  url: string
}

declare const AvatarProps: ComponentClass<AvatarProps>

export default AvatarProps
