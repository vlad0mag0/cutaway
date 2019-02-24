import React, {Component} from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import {ChatList} from './../../app/screens/messaging/chatList'

class Messages extends Component{

render(){
  return(
    <View>
      <ChatList/>
    </View>
  )

}

}
 export default Messages
