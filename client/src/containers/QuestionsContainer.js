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
    answer,
    isCorrect,
    showAnswer,
    questions,
    showAnswerInput
  } = state;

  const transition = useTransition(index, (index) => index, {
    config: config.stiff,
    from: {
      transform: 'scale(2) skew(5deg)',
      position: 'absolute'
    },
    enter: {
      opacity: 1,
      transform: 'scale(1) skew(1deg)',
      position: 'relative'
    },
    leave: {
      transform: 'scale(0) skew(5deg)',
      position: 'absolute',
      width: '100%',
      height: '100%'
    }
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
    if (questions[index + 1]) {
      dispatch({
        type: 'SET_AND_SHOW_ACTIVE_QUESTION',
        payload: questions[index + 1]
      });
      setQuestionIndex(index + 1);
    } else {
      dispatch({
        type: 'SET_QUIZ_COMPLETE'
      });
    }
  };

  return (
    <React.Fragment>
      {transition.map(({ item, key, props }) => {
        return (
          <animated.div
            key={key}
            style={props}
            className="flex flex-grow justify-center p-4 bg-white border rounded-lg shadow relative"
          >
            <Question
              type={activeQuestion.type}
              path={activeQuestion.path}
              answerType={activeQuestion.answerType}
              content={activeQuestion.content}
              choices={activeQuestion.choices}
              submitAnswer={submitAnswer}
              answer={answer}
              isCorrect={isCorrect}
              showAnswer={showAnswer}
              showAnswerInput={showAnswerInput}
            />
          </animated.div>
        );
      })}
    </React.Fragment>
  );
}

export default QuestionsContainer;
