import { Text, Button } from '@botonic/react'
import React from 'react'
import Phone from '../../webviews/phone'


export default class extends React.Component {
  render() {
    return (
      <>
        <Text>You find a cellphone under the cushion but it's locked. You need a 4digit code to access it
          <Button webview={Phone}>Unlock</Button>
        </Text>
      </>
    )
  }
}