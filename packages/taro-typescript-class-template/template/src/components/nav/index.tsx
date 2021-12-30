import classNames from 'classnames'
import Taro from '@tarojs/taro'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { inject, observer } from 'mobx-react'
import { View } from '@tarojs/components'
import { NavProps } from '../../types/components/nav'
import Icon from '@/components/icon'
import './index.scss'

@inject('$store')
@observer
export default class Nav extends React.Component<NavProps> {
  public static propTypes: InferProps<NavProps>
  public static defaultProps: NavProps

  componentWillMount () {
    console.log('this.props.store', this.props.$store.App.systemInfo)
    console.log('this.props.store', this.props.$store.App.isLiuHaiPing)
  }
  public render (): JSX.Element {
    const { App: { navStyle } } = this.props.$store
    const {
      title = 'nav',
      home = false,
      back = false,
      className
    } = this.props
    const rootClass = classNames('nav', className)
    const navMainStyle = {
      height: Taro.getMenuButtonBoundingClientRect().height
    }
    return (
      <View className={rootClass} style={navStyle}>
        <View className='nav-main' style={navMainStyle}>
          {
            home && <View className='home'></View>
          }

          {
            back && <View className='back'>
              <Icon value='fanhui' size={20}/>
            </View>
          }

          <View className='title'>{title}</View>
        </View>
      </View>
    )
  }
}
//
// Nav.defaultProps = {
//   customStyle: '',
//   className: '',
//   store: this.props.store
// }

Nav.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
}
