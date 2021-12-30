import React from 'react'
import { View } from '@tarojs/components'
import { inject, observer } from 'mobx-react'
import { UserInfoProps } from '@/types/components/user-info'
import { Avatar } from '@/components'
import './index.scss'

@inject('$store')
@observer
export default class UserInfo extends React.Component<UserInfoProps> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  private onClick = (e) => {
    const { data } = this.props
    if (!data.nickName) {
      this.props.onClick && this.props.onClick(e)
    }
  }

  public render (): JSX.Element {
    const { data } = this.props
    let nickName = data.nickName ? `Hi~,${data.nickName}` : '点击登录'
    return (
      <View className='user' onClick={this.onClick}>
        <Avatar className='user-avatar' url={data.avatarUrl}/>
        <View className='nick-name'>{nickName}</View>
        <View className='yellow-bg'></View>
      </View>
    )
  }
}
