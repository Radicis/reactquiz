import React from 'react';
import PropTypes from 'prop-types';

import BoolAnswerInput from './BoolAnswerInput/BoolAnswerInput';
import MultiAnswerInput from './MultiAnswerInput/MultiAnswerInput';
import NumberAnswerInput from './NumberAnswerInput/NumberAnswerInput';

function AnswerInput({ answer, answerType = 'BOOL', choices, submitAnswer }) {
  const getAnswerComponent = (type) => {
    switch (type) {
      case 'BOOL':
        return <BoolAnswerInput setAnswer={submitAnswer} answer={answer} />;
      case 'NUMBER':
        return <NumberAnswerInput setAnswer={submitAnswer} answer={answer} />;
      case 'MULTI':
        return (
          <MultiAnswerInput
            setAnswer={submitAnswer}
            choices={choices}
            answer={answer}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col flex-grow justify-center flex-grow">
      {getAnswerComponent(answerType)}
    </div>
  );
}

AnswerInput.propTypes = {
  answerType: PropTypes.string,
  submitAnswer: PropTypes.func,
  choices: PropTypes.array,
  answer: PropTypes.string
};

export default AnswerInput;
