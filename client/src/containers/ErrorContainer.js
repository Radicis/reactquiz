import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/Store';
import Error from '../components/Error/Error';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';

function ErrorContainer({ history }) {
  const [state, dispatch] = useContext(Context);
  const [localErr, setLocalErr] = useState('');
  const { error } = state;

  const transition = useTransition(localErr, null, {
    from: { transform: 'translate3d(0,50px,0)', opacity: 0 },
    enter: { transform: 'translate3d(0,0,0)', opacity: 1 },
    leave: { transform: 'translate3d(0,50px,0)', opacity: 0 }
  });

  const clearError = () => {
    dispatch({
      type: 'SET_ERROR'
    });
  };

  useEffect(() => {
    console.log(error);
    if (error) {
      const { message, exit } = error;
      if (message && message !== 'websocket error') {
        setLocalErr(message);
      } else {
        setLocalErr('UnKnown Error');
      }
      // If the exit code is true then go to landing page and reset the state
      if (exit) {
        history.push('/');
      }
    } else {
      setLocalErr(null);
    }
  }, [setLocalErr, dispatch, error, history]);

  return (
    <React.Fragment>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="z-20 px-6 py-4 text-lg absolute bottom-0 left-0 bg-red-900 text-gray-100 w-full flex items-center justify-center shadow-2xl"
            >
              <Error
                clearError={clearError}
                error={(error && error.message) || 'Unknown Error'}
              />{' '}
            </animated.div>
          )
      )}
    </React.Fragment>
  );
}

ErrorContainer.propTypes = {
  history: PropTypes.object
};

export default withRouter(ErrorContainer);
