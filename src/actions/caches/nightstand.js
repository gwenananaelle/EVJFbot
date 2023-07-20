import { Text, Document,} from '@botonic/react'
import React from 'react'
import kamasutra from '../../assets/kamasutra.png'
import { webchat } from '../../webchat/index'

export default class extends React.Component {
  render() {
    webchat.addToMenu("nightstand");
    return (
      <>
        <Document src={kamasutra} />
        {/* <Image src='https://media3.giphy.com/media/gtPaaCbkxpmWk/giphy.gif' /> */}
        <Text>I know some of those positions, but not all...I can't see the flying whale in there</Text>
      </>
    )
  }
}
