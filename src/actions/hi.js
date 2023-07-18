import { Text } from '@botonic/react'
import React from 'react'

export default class extends React.Component {
  static async botonicInit({session}) {
    const name = session.user.name
    return { name }
  }
  render() {
    return (
      <>
      <Text>Wecome {this.props.name}! You have been invited by your friend Edvina to her bachelorette’s party. Which is weird since she was single the last time you saw her but whatever.</Text>
      <Text>I’m so happy to see you, come in, come in !</Text>
      <Text>The apartment is decorated with balloons, there is music playing, cocktails and hors d'oeuvres on the table, and friends sitting around chatting.</Text>
      <Text>Sit down, get comfortable, enjoy the music...I made sex on the beach, would you like one ? When you're ready let me know and I'll tell you what it's all about 😁</Text>
      </>
    )
  }
}