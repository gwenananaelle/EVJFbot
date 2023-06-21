import { Text } from '@botonic/react'
import React from 'react'

export default class extends React.Component {
  static async botonicInit({ input }) {
    let answer = input.defaultFallback
    return { answer}
  }
  render() {
    return <Text>{this.props.answer} 🍹😜 </Text>
  }
}