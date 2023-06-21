import { Text } from '@botonic/react'
import React from 'react'

export default class extends React.Component {
  static async botonicInit({ input }) {
    if (input['intent'] === undefined) return { errors: true }
    let answer = input.defaultFallback
    return { answer }
  }

  render() {
    if (this.props.errors)
      return (
        <Text>
          Enter the generated JSON key for dialogflowV2 in plugins.js to test
          the bot.
        </Text>
      )
    return <Text>{this.props.answer}</Text>
  }
}
