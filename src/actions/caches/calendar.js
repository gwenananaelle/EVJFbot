import { Text, Document } from '@botonic/react'
import React from 'react'
import calendar from '../../assets/calendar.pdf'
import { webchat } from '../../webchat/index'


export default class extends React.Component {

  render() {
    webchat.persistentMenu.push({ label: "calendar", payload: "calendar"});
    return (
      <>
        <Document src={calendar} />
        <Text>This calendar is making me thirsty 🥵 </Text>
      </>
    )
  }
}