import React, { useContext } from 'react';
import { Context } from '../store/Store';

import AnswerInput from '../components/AnswerInput/AnswerInput';
import WaitingForPlayers from '../components/WaitingForPlayers/WaitingForPlayers';
import Ready from '../components/Ready/Ready';
import Answer from '../components/Answer/Answer';
import { animated, config, useSpring } from 'react-spring';
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
    showCountdown
  } = state;

  const props = useSpring({
    config: config.stiff,
    from: { opacity: 0, transform: 'translate3d(-1000px, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0px, 0, 0)' }
  });

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
      type: 'SET_SHOW_WAITING'
    });
  };

  return (
    <React.Fragment>
      {showWaiting ? (
        <animated.div style={props} className="flex justify-center">
          <WaitingForPlayers />
        </animated.div>
      ) : (
        ''
      )}
      {showCountdown ? (
        <animated.div style={props} className="flex justify-center">
          <Countdown time={10} />
        </animated.div>
      ) : (
        ''
      )}
      {activeQuestion && showAnswerInput ? (
        <animated.div style={props} className="flex justify-center">
          <AnswerInput
            submitAnswer={submitAnswer}
            answerType={activeQuestion.answerType}
            choices={activeQuestion.choices}
          />
        </animated.div>
      ) : (
        <React.Fragment>
          {showReady ? (
            <animated.div style={props} className="flex justify-center">
              <Ready setPlayerReady={setPlayerReady} />{' '}
            </animated.div>
          ) : (
            ''
          )}
          {showAnswer ? (
            <animated.div style={props} className="flex justify-center">
              <Answer
                answer={activeQuestion.answer.toString()}
                isCorrect={isCorrect}
              />
            </animated.div>
          ) : (
            ''
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default AnswerContainer;
