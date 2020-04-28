import React, { useContext, useEffect } from 'react';
import { Context } from '../store/Store';
import { withRouter } from 'react-router-dom';

import UserSetup from '../components/UserSetup/UserSetup';
import { useTransition, animated, config } from 'react-spring';
import PropTypes from 'prop-types';

function UserSetupContainer({ history }) {
  const [state, dispatch] = useContext(Context);

  const { socket, player } = state;

  const transition = useTransition(player && !player.isActive, null, {
    config: config.wobbly,
    from: { opacity: 0, transform: 'scale(0)', position: 'absolute' },
    enter: { opacity: 1, transform: 'scale(1)', position: 'relative' },
    leave: { opacity: 0, transform: 'scale(0)', position: 'absolute' }
  });

  useEffect(() => {
    console.log(player);
    dispatch({
      type: 'RESET'
    });
  }, [dispatch]);

  const setPlayerName = (name) => {
    // Emit the set name event on the socket
    socket.emit('set-name', { name });
    goToQuiz();
  };

  const goToQuiz = () => {
    history.push('/t5478t5849hf');
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

UserSetupContainer.propTypes = {
  history: PropTypes.object
};

export default withRouter(UserSetupContainer);
