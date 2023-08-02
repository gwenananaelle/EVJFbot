import { Text, Document } from '@botonic/react'
import React from 'react'
import { webchat } from '../webchat/index'

/*
Tableau avec les valeurs de chaque nom, pour référence
Tableau des noms déjà trouvés
Si utilisateur trouve un nom parmi les cinq
on vérifie si le nom n'est pas déjà dans le tableau des noms trouvés
sinon, on l'ajoute dans le tableau en question
quand tableau plein : message avec invitation
Ferdinand = c'est gagné
*/

export default class extends React.Component {
  static async botonicInit({ input }) {
      let room = input.entities["Room"]
      return { room }
    }
render() {
    if (!this.props.room) {
      return (
        <>
        <Text>which room do you want to search ?</Text>
      </>
      )
    }
    if (this.props.room == 'living room') {
      webchat.addToMenu("livingroom");
      return (
        <>
        <Text>The living room is nicely decorated, there is comfortable sofa and you feel like something is stuck under the cushion...</Text>
        <Text>You can see a lot of pictures on her wall, of course a lot of them are of ferris wheel, her passion...But there is a sexy calendar as well !</Text>
        <Text>The TV is emitting a strange sound. Maybe if you turn it on ?</Text>
        <Text>Where would you like to search first ?</Text>
      </>
      )
    }
    if (this.props.room == 'bedroom') {
      webchat.addToMenu("bedroom");
      return (
        <>
        <Text>the only thing noticeable here is the half opened drawer in the nightstand...</Text>
      </>
      )
    }
    if (this.props.room == 'mailbox') {
      webchat.addToMenu("mailbox");
      return (
        <>
          <Document src={lasvegas} />
          <Text>You find this card in the mailbox</Text>
        </>
      )
    }
    return (
      <Text>Sorry, I don't know anything about {this.props.room}</Text>
    )
}
}