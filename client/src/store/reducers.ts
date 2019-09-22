import {
  ChatActionTypes,
  SystemActionTypes,
  ChatState,
  SystemState,
  RECEIVE_MESSAGE,
  SET_USER,
  SET_CHANNEL
} from "./types";

const initialChatState: ChatState = {
  channels: ['general', 'catpeople', 'dogpeople'],
  channelMessages: {general: [], catpeople: [], dogpeople: []}
};
const initialSystemState: SystemState = {user: {user: 'anonymous'}, currentChannel: 'general'};

export const chatReducer = (state = initialChatState, action: ChatActionTypes): ChatState => {
  switch (action.type) {
    case RECEIVE_MESSAGE: {
      const arr = state.channelMessages[action.payload.channel];
      return {
        ...state,
        channelMessages: {...state.channelMessages, [action.payload.channel]: [...arr, action.payload]}
      }
    }
    default:
      return state
  }
};

export const systemReducer = (
  state = initialSystemState,
  action: SystemActionTypes
): SystemState => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: {user: action.payload.user}
      }
    }
    case SET_CHANNEL: {
      return {
        ...state,
        currentChannel: action.payload
      }
    }
    default:
      return state
  }
};
