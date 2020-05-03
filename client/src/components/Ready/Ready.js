import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import scaleTransition from '../../hooks/scaleTransition';

function Ready({ show, setPlayerReady }) {
  const transition = scaleTransition(show);
  return (
    <React.Fragment>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="rounded-full text-4xl border cursor-pointer"
              onClick={setPlayerReady}
            >
              Ready!
            </animated.div>
          )
      )}
    </React.Fragment>
  );
}

Ready.propTypes = {
  setPlayerReady: PropTypes.func,
  show: PropTypes.bool
};

export default Ready;
