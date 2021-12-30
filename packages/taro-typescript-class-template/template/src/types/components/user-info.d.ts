import { ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import BaseComponent from '@/types/base'

export interface UserInfoProps extends BaseComponent {
  data: NApp.userInfo
}

declare const UserInfoProps: ComponentClass<UserInfoProps>

export default UserInfoProps
