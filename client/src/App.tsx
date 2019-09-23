import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import MessageList from './components/Chat/MessageList'
import ChannelSelector from './components/Chat/ChannelSelector'
import MessageInput from './components/Chat/MessageInput'
import Login from './components/Chat/Login'
import {subscribeMessages} from './store/actions';
import {AppState} from './store';
import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(subscribeMessages());
    // eslint-disable-next-line
  }, []);

  const user = useSelector((state: AppState) => state.system.user);

  return (
    <div className="App">
      <ChannelSelector/>
      <div>
        <div className="chat-wrapper">
          {user.user === 'anonymous' ? (
              <Login/>
            ) :
            (
              <>
                <MessageList/>
                <MessageInput user={user.user}/>
              </>
            )}
        </div>
      </div>
    </div>
  );
};

export default App;
