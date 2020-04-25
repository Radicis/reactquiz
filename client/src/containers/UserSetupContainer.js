import React, { useContext } from 'react';
import { Context } from '../store/Store';

import UserSetup from '../components/UserSetup/UserSetup';
import { useTransition, animated, config } from 'react-spring';

function UserSetupContainer() {
  const [state] = useContext(Context);

  const { socket, player } = state;

  const transition = useTransition(player && !player.isActive, null, {
    config: config.wobbly,
    from: { opacity: 0, transform: 'scale(0)', position: 'absolute' },
    enter: { opacity: 1, transform: 'scale(1)', position: 'relative' },
    leave: { opacity: 0, transform: 'scale(0)', position: 'absolute' }
  });

  const setPlayerName = (name) => {
    // Emit the set name event on the socket
    socket.emit('set-name', { name });
  };

  return (
    <React.Fragment>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="flex flex-grow w-full h-full"
            >
              <UserSetup setPlayerName={setPlayerName} />
            </animated.div>
          )
      )}
    </React.Fragment>
  );
}

export default UserSetupContainer;
