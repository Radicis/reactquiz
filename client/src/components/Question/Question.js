import React from 'react';
import PropTypes from 'prop-types';

import AnswerInput from '../AnswerInput/AnswerInput';

function Question({
  submitAnswer = () => {},
  choices = [],
  answerType = 'BOOL',
  answer = '',
  content = ''
}) {
  return (
    <div className="flex flex-col justify-center w-full flex-grow">
      <div className="flex flex-col flex-1 mb-8 justify-center text-center border text-2xl shadow-2xl bg-white p-8 rounded-lg question relative">
        {content}
      </div>
      <div className="flex justify-center flex-2 border shadow-2xl bg-white p-4 rounded-lg answer relative">
        <AnswerInput
          submitAnswer={submitAnswer}
          answerType={answerType}
          choices={choices}
          answer={answer}
        />
      </div>
    </div>
  );
}

Question.propTypes = {
  submitAnswer: PropTypes.func,
  type: PropTypes.string,
  content: PropTypes.string,
  answer: PropTypes.string,
  choices: PropTypes.array,
  answerType: PropTypes.string,
  isCorrect: PropTypes.bool
};

export default Question;
