import { Text, Image, Document,} from '@botonic/react'
import React from 'react'
import clue from '../../assets/kamasutra.png'

export default class extends React.Component {
  render() {
    return (
      <>
        <Document src={clue} />
        {/* <Image src='https://media3.giphy.com/media/gtPaaCbkxpmWk/giphy.gif' /> */}
        <Text>I know some of those positions, but not all...I can't see the flying whale in there</Text>
      </>
    )
  }
}