import { Text, Document } from '@botonic/react'
import React from 'react'
import calendar from '../../assets/calendar.png'

export default class extends React.Component {
  render() {
    return (
      <>
        <Document src={calendar} />
        <Text>This calendar is making me thirsty 🥵 </Text>
      </>
    )
  }
}