import NotFound from './actions/404'
import Bye from './actions/bye'
import Hi from './actions/hi'
import Drink from './actions/drink'
import Music from './actions/music'
import Intro from './actions/intro'
import SearchRoom from './actions/searchRoom'
import Phone from './actions/phone'
import Messages from './actions/caches/messages'
import Photos from './actions/caches/photos'
import Insta from './actions/caches/insta'
import Sofa from "./actions/caches/sofa"
import Calendar from "./actions/caches/calendar"
import Tv from "./actions/caches/tv"
import Nightstand from "./actions/caches/nightstand"
import GuessName from "./actions/guessName"

export const routes = [
  // Captures different intents (enable Dialogflow in src/plugins.js)
  // You can trigger your actions through an intent with 'input' or 'intent' rules
  // Make sure the name of the intent corresponds exactly with the one defined in your NLU service (case sensitive)
  { path: 'hi', intent: 'Default Welcome Intent', action: Hi },
  { path: 'drink', intent: 'Ask Drink', action: Drink },
  { path: 'music', intent: 'Listen To Playlist', action: Music },
  { path: 'intro', intent: 'Start Game', action: Intro },
  { path: 'search', input: (i) => i.intent == 'Search' && i.entities["Room"], action: SearchRoom },
  { path: 'guessName', input: (i) => i.intent == 'guess Name', action: GuessName },
  { path: 'phone', text: (t) => t.includes('1512'), action: Phone, childRoutes: [
    { path: 'messages',session: (s) => !s.user.islocked, action: Messages },
    { path: 'photos', session: (s) => !s.user.islocked, action: Photos },
    { path: 'insta', session: (s) => !s.user.islocked, action: Insta },
  ],},
  { path: 'sofa', input: (i) => i.entities["Cache"]=='sofa', action: Sofa },
  { path: 'sofa', text: (t) => t.includes('cellphone'), action: Sofa },
  { path: 'calendar', input: (i) => i.entities["Cache"]=='calendar', action: Calendar },
  { path: 'tv', input: (i) => i.entities["Cache"]=='tv', action: Tv },
  { path: 'nightstand', input: (i) => i.entities["Cache"]=='nightstand', action: Nightstand },
  { path: 'nightstand', text: (t) => t.includes('kamasutra'), action: Nightstand },
  { path: 'bye', intent: 'smalltalk.greetings.bye', action: Bye },
  { path: 'not_found', type: /.*/, action: NotFound },

  /* There's an implicit rule that captures any other input and maps it to
     the 404 action, it would be equivalent to:
     {type: /^.*$/, action: "404"}
  */
]
