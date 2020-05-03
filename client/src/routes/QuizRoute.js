import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Context } from '../store/Store';

const QuizRoute = ({ component: Component, ...rest }) => {
  const [isActive, setActive] = useState(false);
  const [state, dispatch] = useContext(Context);
  const { quizId, playerId } = state;
  useEffect(() => {
    console.log('Private');
    const checkActive = quizId && playerId;
    setActive(checkActive);
    if (!checkActive) {
      dispatch({
        type: 'RESET'
      });
    }
  }, [dispatch]);

  return (
    <Route
      {...rest}
      render={() => (isActive ? <Component /> : <Redirect to="/" />)}
    />
  );
};

QuizRoute.propTypes = {
  component: PropTypes.func,
  quizId: PropTypes.string
};

export default QuizRoute;
