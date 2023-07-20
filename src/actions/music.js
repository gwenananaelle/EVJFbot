import { Text, Button } from '@botonic/react'
import React from 'react'
import { webchat } from '../webchat/index'

export default class extends React.Component {
  static async botonicInit({ input, session }) {
      let answer = input.defaultFallback
      return { answer, session}
      }
  render() {
    webchat.addToMenu("music");
    return (
      <>
        <Text>Those are my favorite songs right now, do you like it ? 🥰🕺 </Text>
        <Button url='https://deezer.page.link/8rP3TbaaX42hYeyv7'>Listen to the playlist</Button>
      </>
    )
  }
}

