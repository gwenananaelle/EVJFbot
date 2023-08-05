import { Text, Document } from '@botonic/react'
import React from 'react'
import calendar from '../../assets/calendar.pdf'
import { webchat } from '../../webchat/index'


export default class extends React.Component {
  static async botonicInit({ session }) {
    const clues = session.user.extra_data.clueFound;
    return { clues }
  }
  render() {
    webchat.addToMenu("calendar");
    this.props.clues.push("calendar");
    return (
      <>
        <Document src={calendar} />
        <Text>This calendar is making me thirsty 🥵 </Text>
      </>
    )
  }
}