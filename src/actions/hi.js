import { Text } from '@botonic/react'
import React from 'react'

export default class extends React.Component {
  static async botonicInit({ input }) {
    let answer = input.defaultFallback
    return { answer }
  }
  render() {
    return (
      <>
      <Text>You have been invited by your friend Edvina to her bachelorette’s party. Which is weird since she was single the last time you saw her but whatever.</Text>
      <Text>I’m so happy to see you, come in, come in !</Text>
      <Text>The apartment is decorated with balloons, there is music playing, cocktails and hors d'oeuvres on the table, and friends sitting around chatting. Would you like to listen to the music ? Or maybe a drink ?</Text>
      </>
    )
  }
}