import { ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import BaseComponent, { IconBaseProps } from '@/types/base'

export interface IconProps extends BaseComponent, IconBaseProps {
  onClick?: CommonEventFunction
}

declare const IconProps: ComponentClass<IconProps>

export default IconProps
