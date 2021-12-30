import React from 'react'
import { Provider } from 'mobx-react'
import { store } from '@/store'
import router from '@/router'

import './app.scss'

export default class App extends React.Component<any, any> {
  // this.props.children 是将要会渲染的页面
  public render () {
    return <Provider $store={store} $router={router} >{this.props.children}</Provider>
  }
}
