import Sofa from "../caches/sofa"
import Calendar from "../caches/calendar"
import Tv from "../caches/tv"
import Nightstand from "../caches/nightstand"


export const routes = [

    { path: 'sofa', input: (i) => i.intent == 'Search' && i.entities["Cache"]=='sofa', action: Sofa },
    { path: 'calendar', input: (i) => i.intent == 'Search' && i.entities["Cache"]=='calendar', action: Calendar },
    { path: 'tv', input: (i) => i.intent == 'Search' && i.entities["Cache"]=='tv', action: Tv },
    { path: 'nightstand', input: (i) => i.intent == 'Search' && i.entities["Cache"]=='nightstand', action: Nightstand },
    
    // { path: 'sofa',intent: 'Search', entities: 'Cache'=='sofa', action: Sofa },
    // { path: 'calendar', entities: 'Cache'=='calendar', action: Calendar },
    // { path: 'tv', entities: 'Cache'=='tv', action: Tv },
    // { path: 'nightstand', entities: 'Cache'=='nightstand', action: Nightstand },
]