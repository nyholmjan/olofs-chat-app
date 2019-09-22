import {combineReducers} from 'redux'
import {chatReducer, systemReducer} from './reducers'

export const rootReducer = combineReducers({
  chat: chatReducer,
  system: systemReducer
});

export type AppState = ReturnType<typeof rootReducer>
