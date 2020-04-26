import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AnswerButton from '../../common/AnswerButton/AnswerButton';

function BoolAnswerInput({ answer, setAnswer }) {
  const [showAnswer, setShow] = useState(false);
  const handleAnswerInput = (value) => {
    setShow(true);
    setAnswer(value);
  };
  return (
    <div className="flex flex-col flex-grow justify-center">
      <AnswerButton
        correct={answer === 'true'}
        showCorrect={showAnswer}
        label="True"
        grow={true}
        clickAction={() => handleAnswerInput('true')}
      />
      <AnswerButton
        correct={answer === 'false'}
        showCorrect={showAnswer}
        label="False"
        grow={true}
        clickAction={() => handleAnswerInput('false')}
      />
    </div>
  );
}

BoolAnswerInput.propTypes = {
  setAnswer: PropTypes.func,
  answer: PropTypes.string
};

export default BoolAnswerInput;
