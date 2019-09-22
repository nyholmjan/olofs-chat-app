export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const SET_USER = 'SET_USER';
export const SET_CHANNEL = 'SET_CHANNEL';

export interface User {
  user: string
}

export interface Message {
  user: User
  timestamp: Date
  message: string
  channel: string
}

export interface ChatState {
  channels: string[]
  channelMessages: { [channelname: string]: Array<Message> }
}

export interface SystemState {
  user: User
  currentChannel: string
}

interface BaseAction {
  event: string
  leave: boolean
  handle: string
}

interface ReceiveMessageAction extends BaseAction {
  type: typeof RECEIVE_MESSAGE
  payload: Message
  channel: string
}

interface SendMessageAction extends BaseAction {
  type: typeof SEND_MESSAGE
  payload: Message
  channel: string
}

interface ChangeUserAction extends BaseAction {
  type: typeof SET_USER
  payload: User

}

interface ChangeChannel extends BaseAction {
  type: typeof SET_CHANNEL
  payload: string
}


export type ChatActionTypes = ReceiveMessageAction | SendMessageAction
export type SystemActionTypes = ChangeUserAction | ChangeChannel
