import React from 'react';
import PropTypes from 'prop-types';

import BoolAnswerInput from './BoolAnswerInput/BoolAnswerInput';
import MultiAnswerInput from './MultiAnswerInput/MultiAnswerInput';
import TextAnswerInput from './TextAnswerInput/TextAnswerInput';
import NumberAnswerInput from './NumberAnswerInput/NumberAnswerInput';
import { animated } from 'react-spring';
import upDownTransition from '../../hooks/upDownTransition';

function AnswerInput({ show, answerType = 'BOOL', choices, submitAnswer }) {
  const transition = upDownTransition(show);

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
    <React.Fragment>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="flex flex-col justify-center items-center px-4"
            >
              {getAnswerComponent(answerType)}
            </animated.div>
          )
      )}
    </React.Fragment>
  );
}

AnswerInput.propTypes = {
  answerType: PropTypes.string,
  submitAnswer: PropTypes.func,
  choices: PropTypes.array,
  show: PropTypes.bool
};

export default AnswerInput;
