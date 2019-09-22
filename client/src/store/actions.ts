import {
  SEND_MESSAGE,
  RECEIVE_MESSAGE,
  SET_USER,
  SET_CHANNEL,
  Message,
  ChatActionTypes,
  User,
  SystemActionTypes
} from "./types";

export const sendMessage = (newMessage: Message): ChatActionTypes => {
  return {
    event: SEND_MESSAGE,
    handle: SEND_MESSAGE,
    type: SEND_MESSAGE,
    payload: newMessage,
    leave: false,
    channel: newMessage.channel
  }
};

export const changeUser = (user: User): SystemActionTypes => {
  return {
    type: SET_USER,
    payload: user,
    event: '',
    leave: false,
    handle: SET_USER
  }
};

export const changeChannel = (channel: string): SystemActionTypes => {
  return {
    type: SET_CHANNEL,
    payload: channel,
    event: '',
    leave: false,
    handle: SET_CHANNEL
  }
};

export const subscribeMessages = () => {
  return {
    event: 'message',
    type: RECEIVE_MESSAGE,
    handle: RECEIVE_MESSAGE
  }
};

