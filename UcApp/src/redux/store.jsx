import { createStore } from 'redux'
import characterReducer from './characters/characterReducer'

export const store = createStore(characterReducer)

