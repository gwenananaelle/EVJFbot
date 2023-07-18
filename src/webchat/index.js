import Avatar from '../assets/avatar.png'
import CustomCover from './cover-component'

export const webchat = {
    storage: sessionStorage,
    storageKey: 'bot-EVJF',
    coverComponent: CustomCover,
    theme: {
        brand: {
            color: '#E0B6C8',
            image: Avatar,
        },
        triggerButton: {
            image: Avatar,
          },
    },
}
