import React, {Component} from 'react';
import { StyleSheet, Text, ScrollView,View} from 'react-native';
class About extends Component{



  render(){
    return(
      <View style={styles.AboutTabStyles}>
            <Text style={styles.textStyle}>
              {this.props.text}
            </Text>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  AboutTabStyles:{
    paddingTop:15,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 2,
    backgroundColor: 'white'
  },
  textStyle:{
    color: '#8f94a9',
    fontFamily: 'roboto-font-regular',
    fontSize: 15,
  }
})

export default About
