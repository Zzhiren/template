import { ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import BaseComponent from '@/types/base'

export interface MySwiperProps extends BaseComponent {
  data: swiperItem[]
}

export interface swiperItem {
  label: string
  url: string
}

declare const MySwiperProps: ComponentClass<MySwiperProps>

export default MySwiperProps
