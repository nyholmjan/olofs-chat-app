import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TextField} from "@material-ui/core";
import {sendMessage} from "../../store/actions";
import {AppState} from "../../store";
import {User} from "../../store/types";
import './Login.css'

const MessageInput: React.FC<User> = (user: User) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState<string>('');
  const currentChannel = useSelector((state: AppState) => state.system.currentChannel);

  const submitMessage = (evt: React.FormEvent) => {
    evt.preventDefault();
    dispatch(sendMessage({timestamp: new Date(), message: message.substr(0, 160), user, channel: currentChannel}));
    setMessage('');
  };

  return (
    <form onSubmit={submitMessage}>
      <TextField fullWidth placeholder={'send messages'} onChange={(e) => setMessage(e.target.value)} value={message}/>
    </form>
  );
};

export default MessageInput

