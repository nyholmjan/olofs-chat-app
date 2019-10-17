import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Button, TextField} from '@material-ui/core';
import {changeUser} from '../../store/actions';
import './Login.css'

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState<string>('');

  return (
    <form className="login-form">
      <span className="nickname-label">Choose nickname:</span>
      <TextField onChange={event => setUserName(event.target.value)} value={userName}/>
      <Button type='submit' onClick={event => {
        event.preventDefault();
        dispatch(changeUser({userName: userName}));
        setUserName('');
      }}>
        Send
      </Button>
    </form>
  );
};

export default Login;

