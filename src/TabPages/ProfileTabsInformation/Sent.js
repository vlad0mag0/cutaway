import React, {Component} from 'react';
import { StyleSheet, View, ScrollView, Text} from 'react-native';
import Card from './components/Card'
import {Button} from './../../components/Button'
import * as firebase from 'firebase';


class Sent extends Component{
  state={
    cards: [
  ],
    mustdownload: this.props.sent,
    sentCards:[],
    loaded : 0,
    cardsInRow: 3
  }




addCard =  () => {
  let mustdownload = this.state.mustdownload
  const sentCards = []
  let count = 1
  let card  = 1
  new Promise(
    function (resolve, reject) {

      for (card; card < mustdownload+1; card++){
        firebase.database().ref('Users/TmVvm3mUyabp2lrQEaHMNQc6qKX2/postcards/Sent/'+ card).once('value', (snapshot) => {
              image= (snapshot.val().url)
              sentCards.push(image)
              if ( count == mustdownload){
                resolve()
              }
          }).then( () => {count= count+1})

        }
    }).then((fulfilled) => {

    let cardsInRow = this.state.cardsInRow //how much cards in row
    let card = 1
    let height = Math.floor(mustdownload/cardsInRow)
    let restOfCards = mustdownload - (cardsInRow*height) //full cardsInRows of cards
    let row = 1
    let loaded= this.state.loaded //how much cards were loaded
    let loadCardsInRow= [] // cards in row
    let cards=[] //all cards

    for (row; row < height+1; row++){
      for (card = 1; card < cardsInRow+1; card++){
        image = sentCards[loaded]
        loadCardsInRow.push(<Card url={image}/>)
        loaded+=1
      }
      cards.push(
        <View style={styles.blockOfCards}> {loadCardsInRow} </View>
      )
    }

      loadCardsInRow=[]

      card=1

    for (card; card < restOfCards + 1; card++ ){
      image= sentCards[loaded]
      loadCardsInRow.push(<Card url={image}/>)
      loaded+=1
    }

    cards.push(
      <View style={styles.blockOfCards}> {loadCardsInRow}</View>
    )

    loadCardsInRow=0

    a=[<Card url='https://firebasestorage.googleapis.com/v0/b/postcrossing-app.appspot.com/o/3900fa78-2b86-46b8-808b-f8a203aa998f?alt=media&token=397526ce-c001-43f4-992e-368e63f18169' />,<Card url='https://firebasestorage.googleapis.com/v0/b/postcrossing-app.appspot.com/o/cf0da2d2-0905-4e33-98cb-82fb73cfdf4c?alt=media&token=e81495dc-6601-4b0b-a416-4b7d3a4914f3'/>,<Card url='https://firebasestorage.googleapis.com/v0/b/postcrossing-app.appspot.com/o/45c45f32-3863-41e4-83ea-674742e62489?alt=media&token=32bb710d-c985-4b3d-8f6f-42ffee71b4d0' />]
    b= [<Card url= 'https://firebasestorage.googleapis.com/v0/b/postcrossing-app.appspot.com/o/776f6d04-8e16-436d-bf85-30a27d50ae6d?alt=media&token=4e524fda-de89-47bf-a454-abbacd50f550' />,<Card url= 'https://firebasestorage.googleapis.com/v0/b/postcrossing-app.appspot.com/o/ab473a8e-8d8e-4ac8-ac84-c310265b0181?alt=media&token=23ace45a-f5e9-48cc-83f7-e3be264f3f5e' />]

    this.setState({
      cards: cards
    })

  })
}


  render(){
    return(
        <View style={styles.mainBlock}>
          {this.state.cards}
          <Button onPress={() => {this.addCard()}}><Text>Add card</Text></Button>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  receivedTab:{
    marginRight:5,
    marginLeft: 5,
  },
  blockOfCards:{
    flexDirection: 'row',
    justifyContent:'space-around',
    marginBottom:-3
  },
  mainBlock:{
    marginBottom: 20
  }
})

export default Sent
