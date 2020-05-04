import React, { useContext, useEffect } from 'react';
import { Context } from '../store/Store';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import UserSetup from '../components/UserSetup/UserSetup';
import * as axios from 'axios';
import { host, port, protocol } from '../config';
import QuizSetup from '../components/QuizSetup/QuizSetup';

function SetupContainer({ history, match }) {
  const [state, dispatch] = useContext(Context);

  const { playerName, quizId } = state;

  const setName = (name) => {
    dispatch({
      type: 'SET_PLAYER_NAME',
      payload: name
    });
    if (quizId) {
      joinQuiz(quizId);
    }
  };

  const joinQuiz = (localQuizId) => {
    axios
      .post(`${protocol}://${host}:${port}/${localQuizId}`, {
        name: playerName
      })
      .then((res) => {
        const { quizId, playerId } = res.data;
        dispatch({
          type: 'INIT',
          payload: {
            quizId,
            playerId
          }
        });
        history.push('/quiz');
      })
      .catch(() => {
        dispatch({
          type: 'SET_ERROR',
          payload: { message: 'Quiz not found' }
        });
      });
  };

  const createQuiz = () => {
    axios
      .post(`${protocol}://${host}:${port}`, { name: playerName })
      .then((res) => {
        const { quizId, playerId } = res.data;
        dispatch({
          type: 'INIT',
          payload: {
            quizId,
            playerId
          }
        });
        history.push('/quiz');
      })
      .catch(() => {
        dispatch({
          type: 'SET_ERROR',
          payload: 'Something went wrong'
        });
      });
  };

  useEffect(() => {
    const { params } = match;
    if (params && 'quizId' in params) {
      const { quizId: paramQuizId } = params;
      dispatch({
        type: 'SET_QUIZ_ID',
        payload: paramQuizId
      });
    }
  }, [dispatch, match]);

  return (
    <div className="flex flex-col top-0 left-0 h-full w-full items-center justify-center relative z-10">
      <span className="mb-4 text-3xl font-semibold">Welcome to Quiz!</span>
      <UserSetup setName={setName} show={!playerName} />
      <QuizSetup
        createQuiz={createQuiz}
        joinQuiz={joinQuiz}
        show={!!playerName}
      />
    </div>
  );
}

SetupContainer.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
};

export default withRouter(SetupContainer);
