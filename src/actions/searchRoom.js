import { Text, Document } from '@botonic/react'
import React from 'react'
import lasvegas from '../assets/lasvegas.png'
import { webchat } from '../webchat/index'

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
        return (
          <>
          <Text>the only thing noticeable here is the half opened drawer in the nightstand...</Text>
        </>
        )
      }
      if (this.props.room == 'mailbox') {
        webchat.addToMenu("card");
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