import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View, Image } from '@tarojs/components'
import { AvatarProps } from '../../types/components/avatar'
import './index.scss'

export default class Avatar extends React.Component<AvatarProps> {
  public static propTypes: InferProps<AvatarProps>
  public static defaultProps: AvatarProps

  public render (): JSX.Element {
    const {
      size = 46,
      className = '',
      url = ''
    } = this.props
    const rootClass = classNames('avatar', className)
    const style = {
      width: `${size}px`,
      height: `${size}px`
    }
    return (
      <View className={rootClass} style={style}>
        <Image className='image' src={url} mode='aspectFill'/>
      </View>
    )
  }
}

Avatar.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
}
