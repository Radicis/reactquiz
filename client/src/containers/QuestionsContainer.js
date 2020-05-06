import React, { useContext, useState } from 'react';
import { Context } from '../store/Store';

import Question from '../components/Question/Question';
import { animated, config, useTransition } from 'react-spring';

function QuestionsContainer() {
  const [index, setQuestionIndex] = useState(0);
  const [state, dispatch] = useContext(Context);
  const {
    socket,
    activeQuestion,
    questionStartTime,
    showAnswer,
    questions
  } = state;

  const transition = useTransition(index, (index) => index, {
    config: config.stiff,
    from: {
      transform: 'translate3d(-1000px,0,0)',
      position: 'absolute'
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0,0,0)',
      position: 'relative'
    },
    leave: {
      transform: 'translate3d(1000px,0,0)',
      position: 'absolute',
      height: '100%',
      width: '100%'
    }
  });

  const submitAnswer = (playerAnswer) => {
    const { answer } = activeQuestion;
    const isCorrect = playerAnswer === answer;
    socket.emit('set-player-answer-for-question', {
      questionIndex: index || 0,
      isCorrect,
      playerAnswer,
      answeredTime: new Date() - questionStartTime
    });
    // Allow time to show correctness of the answer to the player
    setTimeout(() => {
      if (questions[index + 1]) {
        dispatch({
          type: 'SET_AND_SHOW_ACTIVE_QUESTION',
          payload: questions[index + 1]
        });
        setQuestionIndex(index + 1);
      } else {
        socket.emit('set-player-complete');
      }
    }, 1000);
  };

  return (
    <React.Fragment>
      {transition.map(({ item, key, props }) => {
        return (
          <animated.div
            key={key}
            style={props}
            className="flex flex-grow w-full justify-center relative"
          >
            <Question
              type={activeQuestion.type}
              answerType={activeQuestion.answerType}
              content={activeQuestion.content}
              choices={activeQuestion.choices}
              submitAnswer={submitAnswer}
              answer={activeQuestion.answer}
              showAnswer={showAnswer}
            />
          </animated.div>
        );
      })}
    </React.Fragment>
  );
}

export default QuestionsContainer;
