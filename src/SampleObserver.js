import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { observer, inject } from 'mobx-react';

@inject(['store'])
@observer
export default class SampleObserver extends Component {
  render() {
    const {medaId} = this.props.store;

    return (
      <View>
           <Text style={{color: "#FFF"}}>{`Hello there your id is ${medaId}`}</Text> 
      </View>
    );
  }
}
