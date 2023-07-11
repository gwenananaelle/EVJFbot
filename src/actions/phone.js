import { Button, Text } from '@botonic/react'
import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLocked: false,
    }
  }
  render() {
    return (
      <>
        <Text>You unlocked the phone, there's only a few apps : photos, instagram, shazam and there is a message unread
          {this.state.isLocked ? "yes" : "no"}
        <Button path='photos'>Open Photos</Button>
        <Button path='messages'>Open Messages</Button>
        <Button path='insta'>Open Instagram</Button>
        </Text>
      </>
    )
  }
}

