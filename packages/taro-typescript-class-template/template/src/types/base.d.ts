import { CSSProperties } from 'react'
import { CommonEventFunction, StandardProps } from '@tarojs/components/types/common'

interface BaseComponent extends StandardProps {
  className?: string
  customStyle?: string | CSSProperties
}

export interface BaseStore {
  $store: {
    App:  NApp.App
  }
}



export interface IconBaseProps extends BaseComponent {
  value: string

  color?: string

  prefixClass?: string

  size?: number | string
}

export default BaseComponent
