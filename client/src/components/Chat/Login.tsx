import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Button, TextField} from "@material-ui/core";
import {changeUser} from "../../store/actions";
import './Login.css'

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState<string>('');

  return (
    <form className="login-form">
      Choose nickname:
      <TextField onChange={(e) => setUser(e.target.value)} value={user}/>
      <Button type='submit' onClick={(evt) => {
        evt.preventDefault();
        dispatch(changeUser({user: user}));
        setUser('');
      }}>
        Send
      </Button>
    </form>
  );
};

export default Login;

