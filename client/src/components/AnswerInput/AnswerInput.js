import React from 'react';
import PropTypes from 'prop-types';

import BoolAnswerInput from './BoolAnswerInput/BoolAnswerInput';
import MultiAnswerInput from './MultiAnswerInput/MultiAnswerInput';
import TextAnswerInput from './TextAnswerInput/TextAnswerInput';
import NumberAnswerInput from './NumberAnswerInput/NumberAnswerInput';
import { animated } from 'react-spring';

function AnswerInput({ show, answerType = 'BOOL', choices, submitAnswer }) {
  const getAnswerComponent = (type) => {
    switch (type) {
      case 'BOOL':
        return <BoolAnswerInput setAnswer={submitAnswer} />;
      case 'TEXT':
        return <TextAnswerInput setAnswer={submitAnswer} />;
      case 'NUMBER':
        return <NumberAnswerInput setAnswer={submitAnswer} />;
      case 'MULTI':
        return <MultiAnswerInput setAnswer={submitAnswer} choices={choices} />;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col justify-center flex-grow">
      {getAnswerComponent(answerType)}
    </div>
  );
}

AnswerInput.propTypes = {
  answerType: PropTypes.string,
  submitAnswer: PropTypes.func,
  choices: PropTypes.array,
  show: PropTypes.bool
};

export default AnswerInput;
