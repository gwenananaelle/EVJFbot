import NotFound from './actions/404'
import Bye from './actions/bye'
import Hi from './actions/hi'
import Drink from './actions/drink'
import Music from './actions/music'
import Intro from './actions/intro'
import SearchRoom from './actions/searchRoom'
import Phone from './actions/phone'
import Messages from './actions/caches/messages'
import { routes as searchRoutes } from './actions/searchFlow/search.routes'


export const routes = [
  // Captures different intents (enable Dialogflow in src/plugins.js)
  // You can trigger your actions through an intent with 'input' or 'intent' rules
  // Make sure the name of the intent corresponds exactly with the one defined in your NLU service (case sensitive)
  { path: 'hi', intent: 'Default Welcome Intent', action: Hi },
  { path: 'drink', intent: 'Ask Drink', action: Drink },
  { path: 'music', intent: 'Listen To Playlist', action: Music },
  { path: 'intro', intent: 'Start Game', action: Intro },
  { path: 'search', input: (i) => i.intent == 'Search' && i.entities["Room"], action: SearchRoom, childRoutes: searchRoutes },
  { path: 'phone', text: /(\d){4}/i, action: Phone, childRoutes: [
    { path: 'messages', action: Messages },
  ],},

  { path: 'bye', intent: 'smalltalk.greetings.bye', action: Bye },
  { path: 'not_found', type: /.*/, action: NotFound },

  /* There's an implicit rule that captures any other input and maps it to
     the 404 action, it would be equivalent to:
     {type: /^.*$/, action: "404"}
  */
]
