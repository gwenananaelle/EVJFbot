import { Text, Button } from '@botonic/react'
import React from 'react'
import { webchat } from '../webchat/index'

export default class extends React.Component {
  static async botonicInit({ input, session }) {
      let answer = input.defaultFallback
      const clues = session.user.extra_data.clueFound;
      return { answer, clues}
      }
  render() {
    webchat.addToMenu("music");
    this.props.clues.push("music");
    return (
      <>
        <Text>Those are my favorite songs right now, do you like it ? 🥰🕺 </Text>
        <Button url='https://deezer.page.link/8rP3TbaaX42hYeyv7'>Listen to the playlist</Button>
      </>
    )
  }
}

