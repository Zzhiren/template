import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Text } from '@tarojs/components'
import { IconProps } from '../../types/components/icon'
import { mergeStyle, pxTransform } from '../../utils/utils'

export default class Icon extends React.Component<IconProps> {
  public static propTypes: InferProps<IconProps>

  private handleClick (): void {
    this.props.onClick && this.props.onClick(arguments as any)
  }

  public render (): JSX.Element {
    const {
      customStyle = '',
      className = '',
      prefixClass = 'icon',
      value = '',
      size = 24,
      color = ''
    } = this.props

    const rootStyle = {
      fontSize: `${pxTransform(parseInt(String(size)) * 2)}`,
      color
    }

    const iconName = value ? `${prefixClass}-${value}` : ''
    return (
      <Text
        className={classNames(prefixClass, iconName, className)}
        style={mergeStyle(rootStyle, customStyle as object)}
        onClick={this.handleClick.bind(this)}
      />
    )
  }
}

// Icon.defaultProps = {
//   customStyle: '',
//   className: '',
//   prefixClass: 'icon',
//   value: '',
//   color: '',
//   size: 24
// }

Icon.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  prefixClass: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func
}
