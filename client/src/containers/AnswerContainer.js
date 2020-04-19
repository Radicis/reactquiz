import React, { useContext } from 'react';
import { Context } from '../store/Store';

import { config, useSpring, animated } from 'react-spring';

import AnswerInput from '../components/AnswerInput/AnswerInput';
import WaitingForPlayers from '../components/WaitingForPlayers/WaitingForPlayers';

function AnswerContainer() {
  const [state, dispatch] = useContext(Context);
  const { activeQuestion, socket, showPlayers, showWaiting } = state;

  const props = useSpring({
    config: config.stiff,
    from: { opacity: 0, transform: 'translate3d(-1000px, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0px, 0, 0)' }
  });

  const submitAnswer = (answer) => {
    dispatch({
      type: 'SET_WAITING'
    });
    socket.emit('set-player-answer-for-active-question', { answer });
  };

  return (
    <React.Fragment>
      {!showPlayers && activeQuestion && !showWaiting ? (
        <AnswerInput
          submitAnswer={submitAnswer}
          answerType={activeQuestion.answerType}
          choices={activeQuestion.choices}
        />
      ) : (
        ''
      )}
      {showWaiting ? <WaitingForPlayers /> : ''}
    </React.Fragment>
  );
}

export default AnswerContainer;
