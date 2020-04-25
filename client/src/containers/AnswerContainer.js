import React, { useContext } from 'react';
import { Context } from '../store/Store';

import AnswerInput from '../components/AnswerInput/AnswerInput';
import WaitingForPlayers from '../components/WaitingForPlayers/WaitingForPlayers';
import Ready from '../components/Ready/Ready';
import Answer from '../components/Answer/Answer';
import Countdown from '../components/Countdown/Countdown';

function AnswerContainer() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(Context);

  const {
    showAnswer,
    isCorrect,
    activeQuestion,
    socket,
    questionStartTime,
    showWaiting,
    showReady,
    showAnswerInput,
    showCountdown,
    isComplete
  } = state;

  const submitAnswer = (playerAnswer) => {
    const { id: questionIndex, answer } = activeQuestion;
    const isCorrect = playerAnswer === answer;
    socket.emit('set-player-answer-for-question', {
      questionIndex,
      isCorrect,
      playerAnswer,
      answeredTime: new Date() - questionStartTime
    });
  };

  const setPlayerReady = () => {
    socket.emit('set-player-ready');
    dispatch({
      type: 'SET_WAITING'
    });
  };

  return (
    <React.Fragment>
      <WaitingForPlayers completed={isComplete} show={showWaiting} />
      <Countdown time={10} show={showCountdown} />
      <Ready setPlayerReady={setPlayerReady} show={showReady} />
      {activeQuestion ? (
        <React.Fragment>
          <Answer
            show={showAnswer}
            answer={activeQuestion.answer.toString()}
            isCorrect={isCorrect}
          />
          <AnswerInput
            show={activeQuestion && showAnswerInput}
            submitAnswer={submitAnswer}
            answerType={activeQuestion.answerType}
            choices={activeQuestion.choices}
          />
        </React.Fragment>
      ) : (
        ''
      )}
    </React.Fragment>
  );
}

export default AnswerContainer;
