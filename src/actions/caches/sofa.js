import { Text } from '@botonic/react'
import React from 'react'
import { webchat } from '../../webchat/index'

export default class extends React.Component {
  render() {
    webchat.addToMenu("cellphone");
    return (
      <>
        <Text>You find a cellphone under the cushion but it's locked. You need a 4digit code to access it</Text>
      </>
    )
  }
}