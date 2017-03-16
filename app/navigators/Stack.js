import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import * as myActions from '../actions/numbers'

const mapStateToProps = (state) => {
  console.log('Stack NavigationWrapper initial state', state)
  return {
    navigationState: state.stackState,
    number: state.numberState,
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = bindActionCreators(myActions, dispatch)

  return {
    ...actionCreators,
    dispatch
  }
}

import StackOne from '../screens/StackOne'
import StackTwo from '../screens/StackTwo'

class NavigationWrapper extends Component {
  render() {
    console.log('Stack NavigationWrapper props', this.props)

    const newProps = {...this.props}
    delete newProps.dispatch
    delete newProps.navigationState

    return (
      <Stacks
        screenProps={{...newProps}}
        navigation={
          addNavigationHelpers({
            state: this.props.navigationState,
            dispatch: this.props.dispatch
          })
        }
      />
    )
  }
}

const RouteConfigs = {
  StackOne: {
    screen: StackOne,
    navigationOptions: {
      title: 'Stack One'
    }
  },
  StackTwo: {
    screen: StackTwo,
    navigationOptions: {
      title: 'Stack Two'
    }
  }
}

const StackNavigatorConfig = {
  initialRouteName: 'StackOne',
  mode: 'modal',
  headerMode: 'screen'
}

export const Stacks = StackNavigator(RouteConfigs, StackNavigatorConfig)

export default connect(mapStateToProps, mapDispatchToProps)(NavigationWrapper)