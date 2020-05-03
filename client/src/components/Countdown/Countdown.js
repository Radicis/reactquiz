import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { animated, config, useTransition } from 'react-spring';
import { Context } from '../../store/Store';
import upDownTransition from '../../hooks/upDownTransition';

function Countdown({ show, time = 5 }) {
  const [value, setVal] = useState(time);
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(Context);

  const transition = upDownTransition(show);

  const countTransition = useTransition(value, (value) => value, {
    config: config.wobbly,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(5)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!parseInt(value) || value <= 1) {
        setVal('GO!');
        clearInterval(interval);
        // wait 2s before showing the first question
        setTimeout(() => {
          dispatch({
            type: 'SHOW_ACTIVE_QUESTION'
          });
        }, 1000);
      } else {
        setVal(value - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [value, dispatch]);

  return (
    <React.Fragment>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="flex flex-grow items-center justify-center relative"
            >
              {countTransition.map(({ item, key, props }) => (
                <animated.div
                  key={key}
                  style={props}
                  className="number absolute"
                >
                  {item}
                </animated.div>
              ))}
            </animated.div>
          )
      )}
    </React.Fragment>
  );
}

Countdown.propTypes = {
  time: PropTypes.number,
  show: PropTypes.bool
};

export default Countdown;
