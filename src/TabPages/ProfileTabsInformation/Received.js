import React, {Component} from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import Card from './components/Card'


class Received extends Component{



  render(){
    return(
      <View style={styles.receivedTab}>
          <View style={styles.blockOfCards}>
            <Card/>
            <Card/>
            <Card/>
          </View>
          <View style={styles.blockOfCards}>
            <Card/>
            <Card/>
            <Card/>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  receivedTab:{
    marginRight:5,
    marginLeft: 5,
    marginBottom: 5
  },
  blockOfCards:{
    flexDirection: 'row',
    justifyContent:'space-around',
    marginBottom:-3
  }
})

export default Received
