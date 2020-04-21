import React, { useContext } from 'react';
import { Context } from '../store/Store';

import AnswerInput from '../components/AnswerInput/AnswerInput';
import WaitingForPlayers from '../components/WaitingForPlayers/WaitingForPlayers';
import Ready from '../components/Ready/Ready';
import Answer from '../components/Answer/Answer';

function AnswerContainer() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(Context);
  const {
    showAnswer,
    isCorrect,
    activeQuestion,
    socket,
    questionStartTime,
    player
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
  };

  return (
    <React.Fragment>
      {activeQuestion ? (
        <AnswerInput
          submitAnswer={submitAnswer}
          answerType={activeQuestion.answerType}
          choices={activeQuestion.choices}
        />
      ) : (
        <React.Fragment>
          {player.isReady ? <WaitingForPlayers /> : ''}
          {!player.isReady ? <Ready setPlayerReady={setPlayerReady} /> : ''}
          {showAnswer ? (
            <Answer
              answer={activeQuestion.answer.toString()}
              isCorrect={isCorrect}
            />
          ) : (
            ''
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default AnswerContainer;
