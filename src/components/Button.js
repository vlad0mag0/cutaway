import React, {Component} from 'react'
import {View,TouchableOpacity, StyleSheet, Text} from 'react-native'


class Button extends Component{

render(){
  return(
    <View>
      <TouchableOpacity style={styles.buttonStyle} onPress={this.props.onPress}>
        <View style={styles.textStyle}>
          {this.props.children}
        </View>
      </TouchableOpacity>
    </View>
  )
}
}

const styles= StyleSheet.create({
  buttonStyle:{
    height: 45,
    alignSelf: 'stretch',
    backgroundColor:'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#33B5E5',
    marginLeft: 25,
    marginRight: 25,
    marginTop:10,
    marginBottom:8
  },
  textStyle:{
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '300',
    marginTop: 10,
    marginBottom:10
  }
})

export {Button}
