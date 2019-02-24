import React, {Component} from 'react';
import {Font} from 'expo'
import * as firebase from 'firebase';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import MaterialTabs from 'react-native-material-tabs';
import About from './ProfileTabsInformation/About'
import Sent from './ProfileTabsInformation/Sent'
import Received from './ProfileTabsInformation/Received'


class RequestAdress extends Component {

state = {
      ui: 'TmVvm3mUyabp2lrQEaHMNQc6qKX2',
      selectedTab: 0,
      fontLoaded: false,
      tabsOfProfile: <About text={this.props.aboutText}/>,
    }

async componentDidMount() {
    await Font.loadAsync({
      'roboto-font-bold': require('./../../assets/Roboto/Roboto-Bold.ttf'),
      'roboto-font-medium': require('./../../assets/Roboto/Roboto-Medium.ttf'),
      'roboto-font-regular': require('./../../assets/Roboto/Roboto-Regular.ttf')
    });
    this.setState({ fontLoaded: true });
  }

  setTab = selectedTab => {
   this.setState({ selectedTab });

    if (selectedTab === 0){
      this.setState({
        tabsOfProfile: <About text={this.props.aboutText}/>
      })
    }

    if (selectedTab === 1){
      this.setState({
        tabsOfProfile: <Sent sent={this.props.sent}/>
      })
    }

    if (selectedTab === 2){
      this.setState({
        tabsOfProfile: <Received/>
      })
    }
 };

  render(){

    if (this.state.fontLoaded){
      return(
        <View>
          <View style={styles.containerOfHeaderText}>
              <Text style={styles.headerText}>Me</Text>
          </View>
          <View style={styles.headerOfProfile}>
              <View style={styles.postcardsText}>
                  <Text style={styles.profileNumbers}>{this.props.sent}</Text>
                  <Text style={{color:'#FD7992'}}>sent</Text>
              </View>
              <View style={styles.containerImage}>
                <Image
                style={styles.profileImage}
                source = {require('./../img/profile.jpg')}
                />
                <View style = {styles.underPhotoText}>
                  <Text
                  style={{color: '#1d346c',
                  fontFamily:'roboto-font-bold',
                  fontSize: 18}}
                  >
                  {this.props.name}
                  </Text>
                  <Text
                  style={{
                    color: '#d8dcfc',
                    marginTop: 2,
                    fontFamily: 'roboto-font-medium',
                    fontSize: 13,
                    textAlign: 'center'
                }}
                  >
                  {this.props.adress}
                  </Text>
                </View>
              </View>
              <View style={styles.postcardsText}>
                <Text style={styles.profileNumbers}>{this.props.received}</Text>
                <Text style={{color:'#FD7992'}}>received</Text>
              </View>
          </View>
          <View>
              <MaterialTabs
                items={['about', 'sent', 'received']}
                selectedIndex={this.state.selectedTab}
                onChange={this.setTab}
                barColor="white"
                indicatorColor="#d1d5fa"
                activeTextColor="#4d58ee"
                uppercase= {false}
                textStyle={{
                  fontFamily: 'roboto-font-medium',
                  fontSize: 16
              }}
              />
          </View>
          <ScrollView style={styles.informationStyle}>
            {this.state.tabsOfProfile}
          </ScrollView>
      </View>
      )
    }
    else{return(<Text></Text>)}
  }
}

const styles = StyleSheet.create({
  containerOfHeaderText:{
    marginTop: 25,
    width: "100%",
    height: 20,
    alignItems: 'center',
  },
  headerText:{
    color: '#4d58ee',
    fontFamily:'roboto-font-bold',
    fontSize: 18
  },
  underPhotoText: {
    marginTop: 18
  },
  containerImage: {
    marginTop: 25,
    marginBottom: 12,
    alignItems: 'center',
  },
  profileImage: {
    height: 120,
    width: 120,
    borderRadius: 1000
  },
  profileNumbers:{
    color:'#FD7992',
    fontFamily:'roboto-font-bold',
    fontSize: 19
  },
  headerOfProfile: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  postcardsText:{
    width: '30%',
    marginTop: '20%',
    alignItems: 'center'
  },
  informationStyle:{
    width: '100%',
    height: '52%',
    zIndex: 0
  }
})


export default RequestAdress
