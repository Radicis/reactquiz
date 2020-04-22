import React, { useContext } from 'react';
import { Context } from '../store/Store';

import UserSetup from '../components/UserSetup/UserSetup';
import { useSpring, animated, config } from 'react-spring';
import Countdown from '../components/Countdown/Countdown';

function UserSetupContainer() {
  const [state] = useContext(Context);

  const { socket, player } = state;

  const props = useSpring({
    config: config.wobbly,
    transform: player ? 'translate3d(0px, 0, 0)' : 'translate3d(-1000px, 0, 0)',
    display: player && player.isActive ? 'none' : 'block'
  });

  const setPlayerName = (name) => {
    // Emit the set name event on the socket
    socket.emit('set-name', { name });
  };

  return (
    <animated.div style={props} className="flex flex-grow">
      {player ? <UserSetup setPlayerName={setPlayerName} /> : ''}
    </animated.div>
  );
}

export default UserSetupContainer;
