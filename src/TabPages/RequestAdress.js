import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import {Button} from './../components/Button';
import PhotoLoad from './componentsAdress/PhotoLoad'
import * as firebase from 'firebase';


class RequestAdress extends Component {

state={
  mainView: <Button onPress = {this.onPressRequestButton.bind(this)}><Text>Request Adress</Text></Button>,
  sent: this.props.sent,
  received: this.props.receive
}

onPressRequestButton(){
  this.setState({
    mainView: <PhotoLoad sent={this.state.sent} received={this.state.received}/>
  })
}

onPressButton(){
  firebase.database().ref('listOfUsers/countUsers').once('value', function (snapshot) {
     const length = (snapshot.val().countUsers)
     const randomUser = Math.floor(Math.random() * (length - 1 + 1)) + 1;
     firebase.database().ref('listOfUsers/'+ randomUser).once('value', function (snapshot) {
       const User = (snapshot.val().user)
       firebase.database().ref('Users/'+ User).once('value', function (snapshot) {
         const Adress = (snapshot.val().adress)
         console.log(Adress)
       })
     })
   })
 }


render(){
    return(
      <View style={styles.mainViewStyles}>
        {this.state.mainView}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainViewStyles:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  }
})

export default RequestAdress
