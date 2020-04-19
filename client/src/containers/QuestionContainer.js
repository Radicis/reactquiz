import React, { useContext } from 'react';
import { Context } from '../store/Store';

import Question from '../components/Question/Question';

function QuestionContainer() {
  const [state] = useContext(Context);
  const { activeQuestion, isComplete, isStarted } = state;

  return (
    <div className="flex flex-col justify-center h-full p-4">
      {isStarted && activeQuestion ? (
        <Question
          type={activeQuestion.type}
          path={activeQuestion.path}
          content={activeQuestion.content}
        />
      ) : (
        ''
      )}
      {isStarted && isComplete ? (
        <div className="flex justify-center">Quiz Complete!</div>
      ) : (
        ''
      )}
      {!isStarted ? (
        <div className="flex justify-center">Ready To Start!</div>
      ) : (
        ''
      )}
    </div>
  );
}

export default QuestionContainer;
