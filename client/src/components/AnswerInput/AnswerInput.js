import React from 'react';
import PropTypes from 'prop-types';

import BoolAnswerInput from './BoolAnswerInput/BoolAnswerInput';
import MultiAnswerInput from './MultiAnswerInput/MultiAnswerInput';
import TextAnswerInput from './TextAnswerInput/TextAnswerInput';
import NumberAnswerInput from './NumberAnswerInput/NumberAnswerInput';
import { animated, config, useSpring } from 'react-spring';

function AnswerInput({ answerType = 'BOOL', choices, submitAnswer }) {
  const props = useSpring({
    config: config.stiff,
    from: { opacity: 0, transform: 'translate3d(0, 1000px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0px, 0, 0)' }
  });

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
    <animated.div
      style={props}
      className="flex flex-col justify-center items-center px-4"
    >
      {getAnswerComponent(answerType)}
    </animated.div>
  );
}

AnswerInput.propTypes = {
  answerType: PropTypes.string,
  submitAnswer: PropTypes.func,
  choices: PropTypes.array
};

export default AnswerInput;
