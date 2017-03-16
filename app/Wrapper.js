import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import configureStore from './config/StoreConfig'
const store = configureStore()

import StackNavigation from './navigators/Stack'

class ReactReduxNavigator extends Component {
  render() {
    return (
      <Provider store={store} >
        <StackNavigation />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('ReactReduxNavigator', () => ReactReduxNavigator)