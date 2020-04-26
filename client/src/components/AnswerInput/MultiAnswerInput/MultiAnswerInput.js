import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AnswerButton from '../../common/AnswerButton/AnswerButton';

function MultiAnswerInput({ answer, choices = [], setAnswer }) {
  const [showAnswer, setShow] = useState(false);
  const handleAnswerInput = (value) => {
    setShow(true);
    setAnswer(value);
  };
  function renderChoice(choice) {
    return (
      <AnswerButton
        correct={answer === choice}
        showCorrect={showAnswer}
        key={choice}
        label={choice}
        grow={true}
        clickAction={() => handleAnswerInput(choice)}
      />
    );
  }

  return (
    <div className="flex flex-col flex-grow justify-center">
      {choices.map(renderChoice)}
    </div>
  );
}

MultiAnswerInput.propTypes = {
  choices: PropTypes.array,
  setAnswer: PropTypes.func,
  answer: PropTypes.string
};

export default MultiAnswerInput;
