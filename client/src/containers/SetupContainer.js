import React, { useContext } from 'react';
import { Context } from '../store/Store';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import UserSetup from '../components/UserSetup/UserSetup';
import * as axios from 'axios';
import { host, port, protocol } from '../config';
import QuizSetup from '../components/QuizSetup/QuizSetup';

function SetupContainer({ history }) {
  const [state, dispatch] = useContext(Context);

  const { playerName } = state;

  const setName = (name) => {
    dispatch({
      type: 'SET_PLAYER_NAME',
      payload: name
    });
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
        console.log('No quiz found');
        dispatch({
          type: 'SET_ERROR',
          payload: 'Quiz not found'
        });
      });
  };

  const createQuiz = () => {
    axios
      .post(`${protocol}://${host}:${port}`, { name: playerName })
      .then((res) => {
        console.log('Quiz created');
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
      .catch((e) => {
        console.log(e);
        dispatch({
          type: 'SET_ERROR',
          payload: 'Something went wrong'
        });
      });
  };

  return (
    <div className="flex flex-col top-0 left-0 h-full w-full items-center justify-center relative z-10">
      <span className="mb-4 text-3xl font-semibold">Welcome to Quiz!</span>
      <UserSetup setName={setName} show={!playerName} />
      <QuizSetup
        createQuiz={createQuiz}
        joinQuiz={joinQuiz}
        show={playerName}
      />
    </div>
  );
}

SetupContainer.propTypes = {
  history: PropTypes.object
};

export default withRouter(SetupContainer);
