import io from 'socket.io-client';
import {Dispatch, MiddlewareAPI} from 'redux';
import {ChatActionTypes, Message, SystemActionTypes} from '../types';

export const socketMiddleware = () => {
  const socket = io(process.env.NODE_ENV === 'development' ? ':8000' : '');

  return ({dispatch}: MiddlewareAPI) => (next: Dispatch) => (action: ChatActionTypes | SystemActionTypes) => {
    if (typeof action === 'function') {
      return next(action);
    }

    const {
      event,
      leave,
      handle,
      payload,
      ...rest
    } = action;

    if (!event) {
      return next(action);
    }

    if (leave) {
      socket.removeListener(event);
    }

    if (event === 'SEND_MESSAGE') {
      return socket.emit('message', payload)
    }

    let handleEvent: string | Function = handle;
    if (typeof handleEvent === 'string') {
      handleEvent = (payload: Message) => dispatch({type: handle, payload, ...rest});
    }
    return socket.on(event, handleEvent);
  };
};
