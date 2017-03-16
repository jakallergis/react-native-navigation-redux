import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class StackTwo extends Component {
  render() {
    console.log('Stack Two props:', this.props)
    return (
      <View style={{flex: 1, backgroundColor: '#E91E63', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'white', fontSize: 100}}>{this.props.screenProps.number}</Text>
        <View style={{flexDirection: 'row'}}>
          <Button title={'Decrease'} onPress={() =>  this.props.screenProps.numberDecrease()} />
          <Button title={'Increase'} onPress={() =>  this.props.screenProps.asyncIncrease(5000)} />
        </View>
        <Button title={'Reset'} onPress={() => this.props.screenProps.numberReset()} color='black' />
        <Button title={'Next Stack'} onPress={() => this.props.navigation.navigate('StackOne')} color='orange' />
      </View>
    )
  }
}