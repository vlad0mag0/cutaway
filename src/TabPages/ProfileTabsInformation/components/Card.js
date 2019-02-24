import React, {Component} from 'react';
import { Font } from 'expo';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {
  RkButton,
} from 'react-native-ui-kitten';
import CustomSet from './../../../CustomSet.js'


class Card extends Component{

state={
  colorOfLike: '#d8dcfc',
  numberOfLikes: 10
}

onPressLike(){

}



  render(){
    return(
        <View style={styles.cardStyles}>
          <Image
           source={{uri: this.props.url }}
           style={styles.imageStyles}
          />
          <View style={styles.barOfCard}>
            <Text style={styles.numberOfLikes}>{this.state.numberOfLikes}</Text>
            <RkButton rkType='clear' onPress={this.onPressLike}>
              <View style={styles.barUnderImage}><CustomSet size={20} color={this.state.colorOfLike} name='heart-outline'/></View>
            </RkButton>
          </View>
        </View>
    )
  }
}

const styles= StyleSheet.create({
  cardStyles:{
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    marginBottom: 0,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 2,
    backgroundColor: 'white'
  },
  imageStyles:{
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 105,
    height: 67,
  },
  barOfCard:{
    flexDirection:'row',
    justifyContent: 'flex-end',
    marginTop:5,
    marginBottom: 5,
  },
  barUnderImage:{
    width: 27,
    alignItems:'center'
  },
  numberOfLikes:{
    fontFamily: 'roboto-font-medium',
    color: '#d8dcfc',
    fontSize: 17
  }
})

export default Card
