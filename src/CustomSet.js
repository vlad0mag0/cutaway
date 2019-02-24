import React from 'react';
import { Font } from 'expo';
import {View} from 'react-native'

import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from './selection.json';
const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon');

export default class CustomSet extends React.Component{
  state = {
      fontLoaded: false
    }
    async componentDidMount() {
      await Font.loadAsync({
        'icomoon': require('../resources/fonts/icomoon.ttf')
      });

      this.setState({fontLoaded: true});
    }
    render() {
      if (!this.state.fontLoaded) { return null;}

      return (
        <CustomIcon name={this.props.name} size={this.props.size} color={this.props.color} />
      );
    }
  }
