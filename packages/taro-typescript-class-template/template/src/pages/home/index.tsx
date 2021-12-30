import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { inject, observer } from 'mobx-react'
import { HomeProps, HomeStates } from '@/types/pages/home'
import { Nav, UserInfo } from '@/components'
import './index.scss'

@inject('$store')
@inject('$router')
@observer
export default class Home extends React.Component<HomeProps, HomeStates> {
  constructor (props: HomeProps) {
    super(props);
    this.state = {
      route: {
        name: '',
        url: '',
        meta: {
          title: ''
        }
      }
    }
  }

  componentWillMount () {
  }

  componentDidMount () {
    const { $router } = this.props
    console.log('$router.route', $router.route)
    this.setState({
      route: $router.route
    })
  }

  componentWillUnmount () {
  }

  componentDidShow () {
  }

  componentDidHide () {
  }

  private getUserProfile = (): void => {
    const {App} = this.props.$store
    Taro.getUserProfile({
      lang: 'zh_CN',
      desc: '显示当前登录用户',
      success (res) {
        console.log('success', res)
        Taro.setStorageSync('userInfo', res.userInfo)
        App.setUserInfo(res.userInfo)
      },
      fail (err) {
        console.log('err', err)
      }
    })
  }

  public render (): JSX.Element {
    const { route } = this.state;
    const {App: {navStyle, userInfo}} = this.props.$store
    const homeStyle = {
      paddingTop: navStyle.height
    }
    return (
      <View className='home' style={homeStyle}>
        <Nav title={route.meta.title}/>

        <UserInfo onClick={this.getUserProfile} data={userInfo}/>
      </View>
    )
  }
}
