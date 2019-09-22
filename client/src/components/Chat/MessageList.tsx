import React from "react";
import {format} from 'date-fns'
import {Message} from "../../store/types";
import {useSelector} from "react-redux";
import {AppState} from "../../store";
import './MessageList.css'

const MessageList: React.FC = () => {
  const currentChannel = useSelector((state: AppState) => state.system.currentChannel);
  const messages = useSelector((state: AppState) => state.chat.channelMessages[currentChannel]);

  const getTimestampString = (date: Date): string => {
    return format(new Date(date), 'HH:mm:ss')
  };

  return (
    <div style={{maxWidth: '100%'}} className="message-list">
      {messages && messages.map((message: Message) => {
        return (
          <div style={{maxWidth: '100%', overflowWrap: 'break-word'}} key={getTimestampString(message.timestamp)}>
            {`${getTimestampString(message.timestamp)} - `}
            <b>{message.user.user}: </b>
            {message.message}
          </div>)
      })}
    </div>
  );
};

export default MessageList;
