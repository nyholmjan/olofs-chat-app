import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TextField} from "@material-ui/core";
import {sendMessage} from "../../store/actions";
import {AppState} from "../../store";
import {User} from "../../store/types";
import './Login.css'

type MessageInputProps = { user: User }

const MessageInput: React.FC<MessageInputProps> = ({user}) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState<string>('');
  const currentChannel = useSelector((state: AppState) => state.system.currentChannel);

  const submitMessage = (evt: React.FormEvent) => {
    evt.preventDefault();
    dispatch(sendMessage({timestamp: new Date(), message: message.substr(0, 160), userName: user.userName, channel: currentChannel}));
    setMessage('');
  };

  return (
    <form onSubmit={submitMessage}>
      <TextField fullWidth placeholder={'send messages'} onChange={event => setMessage(event.target.value)} value={message}/>
    </form>
  );
};

export default MessageInput
