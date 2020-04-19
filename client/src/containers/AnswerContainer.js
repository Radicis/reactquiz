import React, { useContext } from 'react';
import { Context } from '../store/Store';

import AnswerInput from '../components/AnswerInput/AnswerInput';
import WaitingForPlayers from '../components/WaitingForPlayers/WaitingForPlayers';

function AnswerContainer() {
  const [state, dispatch] = useContext(Context);
  const { activeQuestion, socket, showPlayers, showWaiting } = state;

  const submitAnswer = (answer) => {
    dispatch({
      type: 'SET_WAITING'
    });
    socket.emit('set-player-answer-for-active-question', { answer });
  };

  return (
    <React.Fragment>
      {!showPlayers && activeQuestion && !showWaiting ? (
        <div className="flex justify-center items-center flex-grow px-4">
          <AnswerInput
            submitAnswer={submitAnswer}
            answerType={activeQuestion.answerType}
            choices={activeQuestion.choices}
          />
        </div>
      ) : (
        ''
      )}
      {showWaiting ? <WaitingForPlayers /> : ''}
    </React.Fragment>
  );
}

export default AnswerContainer;
