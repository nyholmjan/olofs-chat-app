import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Tabs, Tab} from '@material-ui/core'
import {AppState} from '../../store';
import {changeChannel} from '../../store/actions';
import './ChannelSelector.css'

const ChannelSelector: React.FC = () => {
  const dispatch = useDispatch();

  const channels = useSelector((state: AppState) => state.chat.channels);
  const currentChannel = useSelector((state: AppState) => state.system.currentChannel);
  const user = useSelector((state: AppState) => state.system.user);

  const setChannel = (event: any, channel: string) => {
    dispatch(changeChannel(channel))
  };

  return (
    <nav className={'channel-selector'}>
      {user.user !== 'anonymous' && (
        <>
          <h4>Channels</h4>
          <Tabs orientation="vertical" value={currentChannel} onChange={setChannel}>
            {channels.map(channel => {
              return (
                <Tab key={channel} label={'#' + channel} value={channel} className="channel-button"/>
              )
            })}
          </Tabs>
        </>
      )}
    </nav>
  );
};

export default ChannelSelector;
