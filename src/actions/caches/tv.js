import { Text, Document } from '@botonic/react'
import React from 'react'
import lips from '../../assets/lips.png'
import lips_alphabet from '../../assets/lips_alphabet.png'
import { webchat } from '../../webchat/index'

export default class extends React.Component {
  render() {
    webchat.addToMenu("lips");
    return (
      <>
        <Document src={lips} />
        <Document src={lips_alphabet} />
        <Text>I can't stop looking at those lips, it's like they're trying to say something to me</Text>
      </>
    )
  }
}