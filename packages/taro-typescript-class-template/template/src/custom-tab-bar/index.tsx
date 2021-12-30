import React from 'react'
import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { View } from '@tarojs/components'
import { inject, observer } from 'mobx-react'
import { CustomTabBarProps, CustomTabBarStates } from "../types/pages/custom-tab-bar"
import { Icon } from '../components'
import './index.scss'

@inject('$store')
@inject('$router')
@observer
export default class CustomTabBar extends React.Component<CustomTabBarProps, CustomTabBarStates> {
  public static propTypes: InferProps<CustomTabBarProps>
  public static defaultProps: CustomTabBarProps

  constructor (props: CustomTabBarProps) {
    super(props)
    this.state = {
      tabs: [
        {label: '首页', icon: 'shouye', name: 'home', activeClass: 'home-point'},
        {label: '我的', icon: 'wode6', name: 'mine', activeClass: 'mine-point'},
      ],
      active: props.$router.active
    }
  }

  private onClick = (name: string): void => {
    this.props.$router.setActive(name)
    this.props.$router.push({
      name: name
    })
  }

  public render (): JSX.Element {
    const {
      tabs,
      active
    } = this.state
    const {className = ''} = this.props

    const rootClass = classNames('custom-tab-bar', className)

    return (

      <View className={rootClass}>
        {tabs.map(v => (
          <View className={`tab ${active === v.name ? active : ''}`} onClick={() => this.onClick(v.name)}>
            <Icon value={v.icon} size={24} color={`${active === v.name ? '#040404' : ''}`}/>
            <View className={`label ${active === v.name ? active : ''}`}>{v.label}</View>
            <View className={`point ${active === v.name ? v.activeClass : ''}`}/>
          </View>
        ))
        }
      </View>
    )
  }
}

CustomTabBar.propTypes = {
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
}
