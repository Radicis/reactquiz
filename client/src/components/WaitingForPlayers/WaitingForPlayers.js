import React from 'react';
import PropTypes from 'prop-types';

import loader from '../../images/loader.svg';
import { animated } from 'react-spring';
import upDownTransition from '../../hooks/upDownTransition';

function WaitingForPlayers({ show, completed }) {
  const transition = upDownTransition(show);
  return (
    <React.Fragment>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="p-4 h-full w-full items-center justify-center flex flex-col"
            >
              <div className="">
                Waiting for everyone to be {completed ? 'done' : 'ready'}..
              </div>
              <img className="h-24" src={loader} alt="Loading.." />
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
