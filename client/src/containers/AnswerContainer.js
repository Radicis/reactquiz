import React, { useContext } from 'react';
import { Context } from '../store/Store';

import AnswerInput from '../components/AnswerInput/AnswerInput';
import WaitingForPlayers from '../components/WaitingForPlayers/WaitingForPlayers';

function AnswerContainer() {
  const [state, dispatch] = useContext(Context);
  const {
    activeQuestion,
    socket,
    showPlayers,
    showWaiting,
    questionStartTime
  } = state;

  const submitAnswer = (playerAnswer) => {
    dispatch({
      type: 'SET_WAITING'
    });
    const { id: questionId, answer } = activeQuestion;
    const isCorrect = playerAnswer === answer;
    socket.emit('set-player-answer-for-question', {
      questionId,
      isCorrect,
      playerAnswer,
      answeredTime: new Date() - questionStartTime
    });
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
