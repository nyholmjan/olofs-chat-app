import React from 'react';
import {format} from 'date-fns'
import {Message} from '../../store/types';
import {useSelector} from 'react-redux';
import {AppState} from '../../store';
import './MessageList.css'

const MessageList: React.FC = () => {
  const currentChannel: string = useSelector((state: AppState) => state.system.currentChannel);
  const messages: Message[] = useSelector((state: AppState) => state.chat.channelMessages[currentChannel]);

  const getTimestampString = (date: Date): string => {
    return format(new Date(date), 'HH:mm:ss')
  };

  return (
    <div className="message-list">
      {messages && messages.map((message: Message) => {
        return (
          <div className="message-row" key={getTimestampString(message.timestamp)}>
            {`${getTimestampString(message.timestamp)} - `}
            <b>{message.user.user}: </b>
            {message.message}
          </div>)
      })}
    </div>
  );
};

export default MessageList;
