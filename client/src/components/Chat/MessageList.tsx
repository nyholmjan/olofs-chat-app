import React, {RefObject, useEffect} from 'react';
import {format} from 'date-fns'
import {Message} from '../../store/types';
import {useSelector} from 'react-redux';
import {AppState} from '../../store';
import './MessageList.css'

const MessageList: React.FC = () => {
  const currentChannel: string = useSelector((state: AppState) => state.system.currentChannel);
  const messages: Message[] = useSelector((state: AppState) => state.chat.channelMessages[currentChannel]);

  let bottom: RefObject<HTMLDivElement> | null | string = React.createRef<HTMLDivElement>();

  useEffect(() => {
    if (bottom && typeof bottom !== 'string' && bottom.current) {
      bottom.current.scrollIntoView()
    }
  }, [messages]);

  const getTimestampString = (date: Date): string => {
    return format(new Date(date), 'HH:mm:ss')
  };

  return (
    <div className="message-list">
      <div className="list-wrapper">
        {messages && messages.map((message: Message) => {
          return (
            <div className="message-row" key={`${message.userName + message.timestamp.toString()}`}>
              {`${getTimestampString(message.timestamp)} - `}
              <b>{message.userName}: </b>
              {message.message}
            </div>)
        })}
        <div ref={bottom}></div>
      </div>
    </div>
  );
};

export default MessageList;
