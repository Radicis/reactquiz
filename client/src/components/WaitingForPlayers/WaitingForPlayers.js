import React from 'react';
import PropTypes from 'prop-types';

import loader from '../../images/loader.svg';
import { animated } from 'react-spring';
import scaleTransition from '../../hooks/scaleTransition';

function WaitingForPlayers({ show, completed }) {
  const transition = scaleTransition(show);
  return (
    <React.Fragment>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="p-4 h-full w-full items-center text-center relative justify-center flex flex-col"
            >
              <div className="text-lg sm:text-2xl">
                Waiting for everyone to be {completed ? 'done' : 'ready'}..
              </div>
              {/*<img className="h-16 absolute" src={loader} alt="Loading.." />*/}
            </animated.div>
          )
      )}
    </React.Fragment>
  );
}

WaitingForPlayers.propTypes = {
  completed: PropTypes.bool,
  show: PropTypes.bool
};

export default WaitingForPlayers;
