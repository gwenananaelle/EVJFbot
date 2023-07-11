import { Text, Document } from '@botonic/react'
import React from 'react'
import dicks from '../../assets/dicks.png'
import dicksNames from '../../assets/dicks_names.png'

export default class extends React.Component {
  render() {
    return (
      <>
        <Document src={dicks} />
        <Document src={dicksNames} />
        <Text>so...That's a dick pic...</Text>
      </>
    )
  }
}